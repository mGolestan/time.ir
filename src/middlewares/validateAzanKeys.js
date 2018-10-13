// @flow
import { BadRequest } from "../utils/errors";
import { getCityByKey } from "../utils/citiesData";
import type { AzanRequestType } from "../routes/azan/azan";

const scrape = (
  req: AzanRequestType,
  res: express$Response,
  next: express$NextFunction
) => {
  const { province, city } = req.query;

  // $flow-disable-line
  if (getCityByKey(province, city).length === 0)
    throw new BadRequest("cityKey and provinceKey not matches");

  next();
};

export default scrape;
