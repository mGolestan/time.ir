// @flow
import { Router as router } from "express";
import healthCheck from "./healthCheck";
import currentDateTime from "./currentDateTime";
import events from "./events";

const route = router();

route.use("/", healthCheck);
route.use("/datetime", currentDateTime);
route.use("/events", events);

export default route;
