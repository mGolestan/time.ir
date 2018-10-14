// @flow
import loadEnv from "./loadEnv";
import promisifyRequest from "./promisifyRequest";

/* eslint-disable no-magic-numbers */
const errorHandler = (res: express$Response, message?: string) => {
  promisifyRequest(loadEnv("TIME_IR_MAIN_URL")).then(
    (response: { statusCode: number }) => {
      if (response.statusCode === 500)
        res.status(500).json({
          error: "time.ir is down"
        });
      else
        res.status(400).json({
          error:
            message ||
            "bad request to application: validate parameters." +
              "if error consisted contact owner https://github.com/mGolestan through email"
        });
    }
  );
};
/* eslint-enable no-magic-numbers */

export default errorHandler;
