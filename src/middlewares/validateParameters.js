// @flow
import { BadRequest } from "../utils/errors";

// eslint-disable-next-line flowtype/no-weak-types
type ValidatorType = any => { valid: boolean, message?: string };
type AllowedRequestPartType = "header" | "body" | "query" | "params";

const allowedRequestPart = ["header", "body", "query", "params"];

const validateParameters = (
  requestPart: AllowedRequestPartType,
  keys: string | string[],
  validator: ?ValidatorType
) => {
  if (!allowedRequestPart.includes(requestPart)) {
    throw new Error(
      `requestPart ${requestPart} is not one of "${allowedRequestPart.join(
        ", "
      )}"`
    );
  }

  return (
    req: {
      // eslint-disable-next-line flowtype/no-weak-types
      [string]: { [string]: any }
    } & express$Request,
    res: express$Response,
    next: express$NextFunction
  ) => {
    if (typeof keys === "string") {
      keys = [keys];
    }

    // eslint-disable-next-line flowtype/no-weak-types
    const requiredValidator = (value: any) =>
      typeof value === "undefined" || value === null
        ? { valid: false, message: "A value is required" }
        : { valid: true };

    keys.every((key: string) => {
      const validatorFunction = validator || requiredValidator;
      const validatorResult = validatorFunction(req[requestPart][key]);

      if (validatorResult.valid) {
        return true;
      }

      throw new BadRequest(
        `Validation failed for '${key}' in request ${requestPart} - ${validatorResult.message ||
          ""}`
      );
    });

    return next();
  };
};

export default validateParameters;
