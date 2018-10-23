// @flow
import { promisify } from "util";
import { Router as router } from "express";
import { wrap } from "async-middleware";
import request from "request";
import { validateParameters } from "../middlewares";
import errorHandler from "../utils/errorHandler";
import loadEnv from "../utils/loadEnv";

const route = router();
const promisifyRequest = promisify(request);

type GetEventRequestType = {
  query: {
    month: string,
    year: string
  } & express$Request
};

route.get(
  "/",
  validateParameters("query", ["year", "month"]),
  wrap((req: GetEventRequestType, res: express$Response) => {
    const { month, year } = req.query;

    const url = `${loadEnv("TIME_IR_MAIN_URL")}/${year}/${month}`;

    return promisifyRequest(url)
      .then((response: { statusCode: number, body: string }) => {}) //eslint-disable-line
      .catch(() => errorHandler(res));
  })
);

export default route;
