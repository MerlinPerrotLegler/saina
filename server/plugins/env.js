import { loadProjectEnv } from "../utils/mail.js";

export default defineNitroPlugin(() => {
  loadProjectEnv();
});
