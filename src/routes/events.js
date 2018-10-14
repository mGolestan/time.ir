// @flow
import { promisify } from "util";
import { Router as router } from "express";
import { wrap } from "async-middleware";
import request from "request";
import { validateParameters } from "../middlewares";
import { BadRequest } from "../utils/errors";
import loadEnv from "../utils/loadEnv";
import { getDayEvents } from "../utils/bodySelectors";

const route = router();
const promisifyRequest = promisify(request);

type GetEventRequestType = express$Request & {
  query: {
    day: string,
    month: string,
    year: string
  }
};

route.get(
  "/",
  validateParameters("query", ["year", "month", "day"]),
  wrap((req: GetEventRequestType, res: express$Response) => {
    const { day, month, year } = req.query;

    const url = `${loadEnv(
      "TIME_IR_MAIN_URL"
    )}/fa/event/list/0/${+year}/${+month}/${+day}`;

    return promisifyRequest(url)
      .then((response: { statusCode: number, body: string }) =>
        getDayEvents(response.body).then((events: Array<string>) => {
          const statusCode = events.length === 0 ? 204 : 200; // eslint-disable-line no-magic-numbers
          res.status(statusCode).json({ events });
        })
      )
      .catch(() => {
        throw new BadRequest("Bad Request to time.ir");
      });
  })
);

export default route;
