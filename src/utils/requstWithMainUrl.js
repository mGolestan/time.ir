// @flow
import loadEnv from "./loadEnv";
import promisifyRequest from "./promisifyRequest";

const requestWithMainUrl = (
  method: "GET" | "POST" | "PUT",
  path?: string = "",
  form?: { [string]: mixed },
  headers?: { [string]: string }
) =>
  promisifyRequest({
    method,
    url: `${loadEnv("TIME_IR_MAIN_URL")}${path}`,
    headers,
    form
  });

export default requestWithMainUrl;
