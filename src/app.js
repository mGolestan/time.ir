// @flow
import express from "express";
import bodyParser from "body-parser";
import compress from "compression";
import helmet from "helmet";
import routes from "./routes";
import { notFound, errResponse, logRequest } from "./middlewares";

const app = express();

app
  .use(
    helmet({
      dnsPrefetchControl: false,
      frameguard: false,
      noCache: true
    })
  )
  .use(compress())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(logRequest)
  .use("/", routes)
  .use(notFound)
  .use(errResponse);

module.exports = app;
