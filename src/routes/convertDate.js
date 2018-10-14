// @flow
import { promisify } from "util";
import { Router as router } from "express";
import { wrap } from "async-middleware";
import request from "request";
import { validateParameters } from "../middlewares";
import { BadRequest } from "../utils/errors";
import loadEnv from "../utils/loadEnv";
import { getConvertedDates } from "../utils/bodySelectors";
import type { ConvertedDateObjectType } from "../utils/bodySelectors/getConvertedDates";

const route = router();
const promisifyRequest = promisify(request);

type ConvertRequestType = express$Request & {
  query: {
    day: string,
    month: string,
    year: string,
    type: string
  }
};

route.get(
  "/",
  validateParameters("query", ["year", "month", "day", "type"]),
  wrap((req: ConvertRequestType, res: express$Response) => {
    const { day, month, year, type } = req.query;

    let convertlcId = "";
    switch (type) {
      case "jalali":
        convertlcId = "1065";
        break;
      case "hijri":
        convertlcId = "1065";
        break;
      case "gregorian":
        convertlcId = "1025";
        break;
      default:
        throw new BadRequest(
          "allowed values for type parameter: ['jalali', 'gregorian', 'hijri']"
        );
    }

    const url = `${loadEnv(
      "TIME_IR_MAIN_URL"
    )}/?convertyear=${+year}&convertmonth=${+month}&convertday=${+day}&convertlcid=${+convertlcId}`;

    return promisifyRequest(url)
      .then((response: { statusCode: number, body: string }) =>
        getConvertedDates(response.body).then(
          (convertedDates: ConvertedDateObjectType) => res.json(convertedDates)
        )
      )
      .catch(() => {
        throw new BadRequest("Bad Request to time.ir");
      });
  })
);

export default route;
