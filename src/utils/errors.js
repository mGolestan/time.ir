// @flow

export class BadRequest extends Error {
  name: string = "BadRequest";
  status: number = 400; // eslint-disable-line no-magic-numbers
}

export class Unauthorized extends Error {
  name: string = "Unauthorized";
  status: number = 401; // eslint-disable-line no-magic-numbers
}

export class Forbidden extends Error {
  name: string = "Forbidden";
  status: number = 403; // eslint-disable-line no-magic-numbers
}

export class NotFound extends Error {
  name: string = "NotFound";
  status: number = 404; // eslint-disable-line no-magic-numbers
}

export class Gone extends Error {
  name: string = "Gone";
  status: number = 410; // eslint-disable-line no-magic-numbers
}

export class InternalServerError extends Error {
  name: string = "InternalServerError";
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
