// @flow

export class BadRequest extends Error {
  name = "BadRequest";
  status = 400; // eslint-disable-line no-magic-numbers
}

export class Unauthorized extends Error {
  name = "Unauthorized";
  status = 401; // eslint-disable-line no-magic-numbers
}

export class Forbidden extends Error {
  name = "Forbidden";
  status = 403; // eslint-disable-line no-magic-numbers
}

export class NotFound extends Error {
  name = "NotFound";
  status = 404; // eslint-disable-line no-magic-numbers
}

export class Gone extends Error {
  name = "Gone";
  status = 410; // eslint-disable-line no-magic-numbers
}

export class InternalServerError extends Error {
  name = "InternalServerError";
  status: number = 500; // eslint-disable-line no-magic-numbers
}

export type ResponseErrorType =
  | BadRequest
  | Unauthorized
  | Forbidden
  | NotFound
  | Gone
  | InternalServerError;

const errors = [
  BadRequest,
  Unauthorized,
  Forbidden,
  NotFound,
  Gone,
  InternalServerError
];

export const isResponseError = (error: Error | ResponseErrorType): boolean =>
  // eslint-disable-next-line flowtype/no-weak-types
  errors.some((ResponseError: any) => {
    const tmpError = new ResponseError();
    return error.name === tmpError.name;
  });
