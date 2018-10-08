// @flow
import { NotFound } from "../utils/errors";

const notFound = () => {
  throw new NotFound("Route not found");
};

export default notFound;
