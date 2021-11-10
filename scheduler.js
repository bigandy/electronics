import cron from "node-cron";

import saveSensorToDb from "./saveSensorToDb.js";
import saveExternalWeatherToDb from "./saveExternalWeatherToDb.js";

cron.schedule("*/5 * * * *", async () => {
  await saveSensorToDb();
  await saveExternalWeatherToDb();
  console.log("have run");
});
