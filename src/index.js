// @flow
require("./utils/loadEnvVar")();

import winston from "winston";
import loadEnv from "./utils/loadEnv";
import app from "./app";

winston.configure({
  transports: [
    new winston.transports.Console({
      json: false,
      colorize: true,
      level: loadEnv("CONSOLE_LOG_LEVEL")
    }),
    new winston.transports.File({
      filename: "./winston.log",
      json: true,
      timestamp: true,
      level: loadEnv("FILE_LOG_LEVEL")
    })
  ]
});

app.listen(loadEnv("PORT"), () => {
  winston.info(`Application started on http://localhost:${loadEnv("PORT")}`);
});
