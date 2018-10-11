// @flow
import { Router as router } from "express";
import cities from "./cities";

const route = router();

route.use("/cities", cities);

export default route;
