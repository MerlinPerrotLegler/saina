import assert from "node:assert/strict";
import { applyEnvText, resolveMailConfig } from "../server/utils/mail.js";

const gmail = resolveMailConfig(
  { smtpHost: "smtp.hstgr.io", smtpUser: "ana@gmail.com", mailTo: "ana@gmail.com", mailFrom: "ana@gmail.com" },
  {},
);
assert.equal(gmail.smtpHost, "smtp.gmail.com");

const hostinger = resolveMailConfig(
  { smtpHost: "smtp.hstgr.io", smtpUser: "contact@siana-joaillerie.fr", mailTo: "ana@gmail.com", mailFrom: "contact@siana-joaillerie.fr" },
  {},
);
assert.equal(hostinger.smtpHost, "smtp.hostinger.com");

const fromEnv = resolveMailConfig(
  { smtpHost: "", mailTo: "", mailFrom: "", smtpUser: "", smtpPassword: "" },
  {
    MAIL_TO: "ana@gmail.com",
    MAIL_FROM: "ana@gmail.com",
    SMTP_HOST: "smtp.gmail.com",
    SMTP_PORT: "587",
    SMTP_USER: "ana@gmail.com",
    SMTP_PASSWORD: "secret",
  },
);
assert.equal(fromEnv.smtpHost, "smtp.gmail.com");
assert.equal(fromEnv.mailTo, "ana@gmail.com");
assert.equal(fromEnv.smtpPassword, "secret");

const env = { SMTP_HOST: "", MAIL_TO: "keep@example.com" };
applyEnvText(env, "SMTP_HOST=smtp.gmail.com\nMAIL_TO=other@example.com\n");
assert.equal(env.SMTP_HOST, "smtp.gmail.com");
assert.equal(env.MAIL_TO, "keep@example.com");
