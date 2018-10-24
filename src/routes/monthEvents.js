// @flow
import { Router as router } from "express";
import { wrap } from "async-middleware";
import { validateParameters } from "../middlewares";
import errorHandler from "../utils/errorHandler";
import requstWithMainUrl from "../utils/requstWithMainUrl";

const route = router();

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

    const postData = {
      Year: year,
      Month: month
    };

    return requstWithMainUrl("POST", "/", postData, {
      "Content-Type": "application/x-www-form-urlencoded"
    })
      .then((response: { statusCode: number, body: string }) => {
        res.send(response);
      })
      .catch(() => errorHandler(res));
  })
);

export default route;
