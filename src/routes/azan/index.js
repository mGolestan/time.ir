// @flow
import { Router as router } from "express";
import validateAzanKeys from "../../middlewares/validateAzanKeys";
import cities from "./cities";
import azan from "./azan";

const route = router();

route.use("/cities", cities);
route.use("/times", validateAzanKeys, azan);

export default route;
