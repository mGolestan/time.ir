// @flow
import { BadRequest, InternalServerError } from "./errors";
import loadEnv from "./loadEnv";
import promisifyRequest from "./promisifyRequest";

const errorHandler = (message?: string) => {
  promisifyRequest(loadEnv("TIME_IR_MAIN_URL")).then(
    (response: { statusCode: number }) => {
      // eslint-disable-next-line no-magic-numbers
      if (response.statusCode === 500)
        throw new InternalServerError("time.ir is down");
      else
        throw new BadRequest(
          message ||
            `bad request to application, validate parameters or
            contact owner https://github.com/mGolestan through email`
        );
    }
  );
};

export default errorHandler;
