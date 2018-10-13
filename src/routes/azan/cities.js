// @flow
import { Router as router } from "express";
import { wrap } from "async-middleware";
import citiesData from "../../utils/citiesData/data";

const route = router();

route.get(
  "/",
  wrap((req: express$Request, res: express$Response) => {
    res.json(citiesData);
  })
);

export default route;
