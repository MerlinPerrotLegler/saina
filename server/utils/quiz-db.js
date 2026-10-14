import mysql from "mysql2/promise";
import { appendLead } from "./leads.js";

let pool;
let tableReady = false;

function configured(config) {
  return Boolean(config.mysqlHost && config.mysqlUser && config.mysqlDatabase);
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
    });
  }
  if (!tableReady) {
    await pool.query(`CREATE TABLE IF NOT EXISTS quiz_leads (
      id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      prenom VARCHAR(80) NOT NULL,
      nom VARCHAR(80) NOT NULL,
      email VARCHAR(200) NOT NULL,
      event_date DATE NOT NULL,
      style VARCHAR(20) NOT NULL,
      answers JSON NOT NULL,
      PRIMARY KEY (id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4`);
    tableReady = true;
  }
  return pool;
}

export async function saveQuizLead(config, record) {
  try {
    const db = await getPool(config);
    if (db) {
      await db.execute(
        `INSERT INTO quiz_leads (prenom, nom, email, event_date, style, answers)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [
          record.prenom,
          record.nom,
          record.email,
          record.date,
          record.style,
          JSON.stringify(record.answers),
        ],
      );
      return;
    }
  } catch (error) {
    console.error("quiz mysql:", error?.code || "unavailable");
  }
  await appendLead("quiz-leads.jsonl", {
    at: new Date().toISOString(),
    prenom: record.prenom,
    nom: record.nom,
    email: record.email,
    date: record.date,
    style: record.style,
    answers: record.answers,
  });
}
