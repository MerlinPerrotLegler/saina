import { randomUUID } from "node:crypto";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import mysql from "mysql2/promise";
import { appendLead } from "./leads.js";

let pool;
let tableReady = false;

function configured(config) {
  return Boolean(config.mysqlHost && config.mysqlUser && config.mysqlDatabase);
}

async function ensureTable(db) {
  await db.query(`CREATE TABLE IF NOT EXISTS quiz_leads (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    prenom VARCHAR(80) NOT NULL,
    nom VARCHAR(80) NOT NULL,
    email VARCHAR(200) NOT NULL,
    event_date DATE NULL,
    style VARCHAR(20) NOT NULL,
    answers JSON NOT NULL,
    kind VARCHAR(20) NOT NULL DEFAULT 'sur-mesure',
    contact_requested_at TIMESTAMP NULL,
    PRIMARY KEY (id)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4`);
  const [cols] = await db.query("SHOW COLUMNS FROM quiz_leads");
  const names = new Set(cols.map((col) => col.Field));
  if (!names.has("kind")) {
    await db.query("ALTER TABLE quiz_leads ADD COLUMN kind VARCHAR(20) NOT NULL DEFAULT 'sur-mesure'");
  }
  if (!names.has("contact_requested_at")) {
    await db.query("ALTER TABLE quiz_leads ADD COLUMN contact_requested_at TIMESTAMP NULL");
  }
  await db.query("ALTER TABLE quiz_leads MODIFY event_date DATE NULL");
}

async function getPool(config) {
  if (!configured(config)) return null;
  if (!pool) {
    pool = mysql.createPool({
      host: config.mysqlHost,
      port: Number(config.mysqlPort) || 3306,
      user: config.mysqlUser,
      password: config.mysqlPassword,
      database: config.mysqlDatabase,
      waitForConnections: true,
      connectionLimit: 4,
      enableKeepAlive: true,
      dateStrings: true,
    });
  }
  if (!tableReady) {
    await ensureTable(pool);
    tableReady = true;
  }
  return pool;
}

function leadFile() {
  return join(process.cwd(), "data", "quiz-leads.jsonl");
}

export async function saveQuizLead(config, record) {
  const fileId = randomUUID();
  try {
    const db = await getPool(config);
    if (db) {
      const [result] = await db.execute(
        `INSERT INTO quiz_leads (prenom, nom, email, event_date, style, answers, kind)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [
          record.prenom,
          record.nom,
          record.email,
          record.date || null,
          record.style,
          JSON.stringify(record.answers),
          record.kind,
        ],
      );
      return { id: String(result.insertId), stored: "mysql" };
    }
  } catch (error) {
    console.error("quiz mysql:", error?.code || "unavailable");
  }
  await appendLead("quiz-leads.jsonl", {
    id: fileId,
    at: new Date().toISOString(),
    prenom: record.prenom,
    nom: record.nom,
    email: record.email,
    date: record.date || "",
    style: record.style,
    answers: record.answers,
    kind: record.kind,
    contact_requested_at: null,
  });
  return { id: fileId, stored: "file" };
}

function normalize(row) {
  if (!row) return null;
  let answers = row.answers;
  if (typeof answers === "string") {
    try {
      answers = JSON.parse(answers);
    } catch {
      answers = [];
    }
  }
  return {
    id: String(row.id),
    prenom: row.prenom,
    nom: row.nom,
    email: row.email,
    date: row.event_date || row.date || "",
    style: row.style,
    answers: Array.isArray(answers) ? answers : [],
    kind: row.kind === "mariage" ? "mariage" : "sur-mesure",
    contactRequested: Boolean(row.contact_requested_at),
  };
}

export async function findQuizLead(config, id) {
  const key = String(id || "");
  if (!key) return null;
  try {
    const db = await getPool(config);
    if (db && /^\d+$/.test(key)) {
      const [rows] = await db.execute("SELECT * FROM quiz_leads WHERE id = ? LIMIT 1", [key]);
      return normalize(rows[0]);
    }
  } catch (error) {
    console.error("quiz mysql:", error?.code || "unavailable");
  }
  try {
    const raw = await readFile(leadFile(), "utf8");
    let found = null;
    let requested = false;
    for (const line of raw.split("\n").filter(Boolean)) {
      const row = JSON.parse(line);
      if (String(row.id) !== key) continue;
      if (row.prenom) found = row;
      if (row.contact_requested_at) requested = true;
    }
    if (!found) return null;
    return normalize({
      ...found,
      contact_requested_at: found.contact_requested_at || (requested ? "1" : null),
    });
  } catch {
    return null;
  }
}

export async function markContactRequested(config, id) {
  const key = String(id || "");
  try {
    const db = await getPool(config);
    if (db && /^\d+$/.test(key)) {
      await db.execute(
        "UPDATE quiz_leads SET contact_requested_at = CURRENT_TIMESTAMP WHERE id = ? AND contact_requested_at IS NULL",
        [key],
      );
      return;
    }
  } catch (error) {
    console.error("quiz mysql:", error?.code || "unavailable");
  }
  await appendLead("quiz-leads.jsonl", {
    id: key,
    contact_requested_at: new Date().toISOString(),
    event: "contact-requested",
  });
}
