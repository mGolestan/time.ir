// @flow
import { promisify } from "util";
import { Router as router } from "express";
import { wrap } from "async-middleware";
import request from "request";
import { BadRequest } from "../utils/errors";
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
      .then((time: string) => {
        promisifyRequest(timeIrMainUrl).then(
          (response: { statusCode: number, body: string }) => {
            const healthyStatusCode = 200;
            if (response.statusCode !== healthyStatusCode)
              throw new BadRequest("Bad Request to time.ir");

            // eslint-disable-next-line max-nested-callbacks
            getCurrentDate(response.body).then((dates: CurrentDateObjectType) =>
              res.json({
                time,
                dates
              })
            );
          }
        );
      });
  })
);

export default route;
