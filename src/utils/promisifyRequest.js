// @flow
import { promisify } from "util";
import request from "request";

const promisifyRequest = promisify(request);

export default promisifyRequest;
