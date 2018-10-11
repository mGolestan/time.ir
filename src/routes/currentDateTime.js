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

type TodaytimeApiObjectType = {
  s: string,
  i: string,
  h: string
};

route.get(
  "/",
  wrap((req: express$Request, res: express$Response) =>
    promisifyRequest(loadEnv("CURRENT_TIME_API"))
      .then((timeResponse: { body: string }) => {
        const timeObject: TodaytimeApiObjectType = JSON.parse(
          timeResponse.body
        );
        return `${timeObject.h}:${timeObject.i}:${timeObject.s}`;
      })
      .then((time: string) => {
        promisifyRequest(loadEnv("TIME_IR_MAIN_URL"))
          .then((response: { statusCode: number, body: string }) => {
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
          })
          .catch(() => {
            throw new BadRequest("Bad Request to time.ir");
          });
      })
  )
);

export default route;
