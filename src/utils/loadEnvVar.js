// @flow
import fs from "fs";
import dotenv from "dotenv";

type EnvObjectType = {};

function override(envObj: EnvObjectType) {
  process.env = { ...process.env, ...envObj };
}

function loadEnvVar() {
  const enviroment = process.env.NODE_ENV || "development";

  if (enviroment !== "production") {
    dotenv.config();
  }

  if (fs.existsSync(".env.local")) {
    override(dotenv.parse(fs.readFileSync(".env.local")));
  }
}

module.exports = loadEnvVar;
