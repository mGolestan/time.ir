// @flow
import { Router as router } from "express";
import healthCheck from "./healthCheck";
import getEvents from "./getEvents";

const route = router();

route.use("/", healthCheck);
route.use("/events", getEvents);

export default route;
