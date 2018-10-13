// @flow
import { promisify } from "util";
import { Router as router } from "express";
import { wrap } from "async-middleware";
import request from "request";
import { validateParameters } from "../../middlewares";
import { BadRequest } from "../../utils/errors";
import loadEnv from "../../utils/loadEnv";
import { getAzanTimes } from "../../utils/bodySelectors";
import type { AzanObjectType } from "../../utils/bodySelectors/getAzanTimes";

const route = router();
const promisifyRequest = promisify(request);

export type AzanRequestType = express$Request & {
  query: {
    province: string,
    city: string
  }
};

route.get(
  "/",
  validateParameters("query", ["province", "city"]),
  wrap((req: AzanRequestType, res: express$Response) => {
    const { province, city } = req.query;

    const url = `${loadEnv(
      "TIME_IR_MAIN_URL"
    )}/?province=${+province}&city=${+city}`;

    promisifyRequest(url)
      .then((response: { statusCode: number, body: string }) => {
        getAzanTimes(response.body).then((azanTimes: AzanObjectType) => {
          res.json(azanTimes);
        });
      })
      .catch(() => {
        throw new BadRequest("Bad Request to time.ir");
      });
  })
);

export default route;
