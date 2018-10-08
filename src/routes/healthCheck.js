// @flow
import { Router as router } from "express";
import { wrap } from "async-middleware";

const route = router();

route.get(
  "/",
  wrap((req: express$Request, res: express$Response) =>
    res.send({
      status: "ok"
    })
  )
);

export default route;
