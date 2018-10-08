// @flow
require("./utils/loadEnvVar")();

import winston from "winston";
import loadEnv from "./utils/loadEnv";
import app from "./app";

winston.level = loadEnv("LOG_LEVEL");

app.listen(loadEnv("PORT"), () => {
  winston.info(`Application started on http://localhost:${loadEnv("PORT")}`);
});
