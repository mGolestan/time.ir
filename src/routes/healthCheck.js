// @flow
import { Router as router } from "express";
import { wrap } from "async-middleware";
import promisifyRequest from "../utils/promisifyRequest";
import loadEnv from "../utils/loadEnv";

const route = router();

route.get(
  "/",
  wrap((req: express$Request, res: express$Response) =>
    promisifyRequest(loadEnv("TIME_IR_MAIN_URL")).then(
      (timeIrResponse: { statusCode: number }) => {
        // eslint-disable-next-line no-magic-numbers
        if (timeIrResponse.statusCode === 200)
          res.json({
            status: "ok"
          });
        else {
          // eslint-disable-next-line no-magic-numbers
          res.status(500).json({
            status: "time.ir not responed"
          });
        }
      }
    )
  )
);

export default route;
