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
        if (timeIrResponse.statusCode)
          res.send({
            status: "ok"
          });
        else
          res.send({
            status: "down"
          });
      }
    )
  )
);

export default route;
