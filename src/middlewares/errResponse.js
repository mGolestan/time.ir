// @flow
import { isResponseError, type ResponseErrorType } from "../utils/errors";
import loadEnv from "../utils/loadEnv";

const ErrorStatusCode = {
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  SERVERERROR: 500
};

type ErrorObjectType = {|
  error: string,
  errorString?: string,
  stack?: string
|};

function generateError(message: string, error: Error): ErrorObjectType {
  const errorObj: ErrorObjectType = {
    error: message
  };
  if (loadEnv("NODE_ENV") === "development") {
    errorObj.errorString = error.toString();
    errorObj.stack = error.stack;
  }

  return errorObj;
}

const errResponse = (
  err: Error | ResponseErrorType,
  req: express$Request,
  res: express$Response,
  next: express$NextFunction
) => {
  if (isResponseError(err) && err.status && typeof err.status === "number") {
    res.status(err.status).json(generateError(err.message, err));
  } else {
    res
      .status(ErrorStatusCode.SERVERERROR)
      .json(generateError(err.message, err));
  }
  next();
};

export default errResponse;
