// @flow
import { debug, verbose } from "winston";

const logRequest = (
  req: express$Request,
  res: express$Response,
  next: express$NextFunction
) => {
  verbose(`Request: ${req.method} ${req.url}`);
  debug(`Request params: ${JSON.stringify(req.params)}`);
  debug(`Request query: ${JSON.stringify(req.query)}`);
  debug(`Request body: ${JSON.stringify(req.body)}`);
  next();
};

export default logRequest;
