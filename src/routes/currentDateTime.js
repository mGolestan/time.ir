// @flow
import { promisify } from "util";
import { Router as router } from "express";
import { wrap } from "async-middleware";
import request from "request";
import errorHandler from "../utils/errorHandler";
import loadEnv from "../utils/loadEnv";
import { getCurrentDate } from "../utils/bodySelectors";
import type { CurrentDateObjectType } from "../utils/bodySelectors/getCurrentDate";

const route = router();
const promisifyRequest = promisify(request);

route.get(
  "/",
  wrap((req: express$Request, res: express$Response) => {
    const timeIrMainUrl = loadEnv("TIME_IR_MAIN_URL");

    return promisifyRequest({
      url: `${timeIrMainUrl}/Tools/GetDate.aspx?t=${new Date().getTime()}`,
      headers: {
        Referer: timeIrMainUrl
      }
    })
      .then((timeResponse: { body: string }) => {
        const splitted = timeResponse.body.split(" ");
        const hourIndex = 3;
        const minuteIndex = 4;
        const secondIndex = 5;
        return `${splitted[hourIndex]}:${splitted[minuteIndex]}:${
          splitted[secondIndex]
        }`;
      })
      .then((time: string) =>
        promisifyRequest(timeIrMainUrl)
          .then((response: { statusCode: number, body: string }) =>
            getCurrentDate(response.body).then(
              // eslint-disable-next-line max-nested-callbacks
              (dates: CurrentDateObjectType) =>
                res.json({
                  time,
                  dates
                })
            )
          )
          .catch(() => errorHandler(res))
      )
      .catch(() => errorHandler(res));
  })
);

export default route;
