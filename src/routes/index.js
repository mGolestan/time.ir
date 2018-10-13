// @flow
import { Router as router } from "express";
import healthCheck from "./healthCheck";
import currentDateTime from "./currentDateTime";
import convertDate from "./convertDate";
import events from "./events";
import azan from "./azan";

const route = router();

route.use("/", healthCheck);
route.use("/datetime", currentDateTime);
route.use("/convert", convertDate);
route.use("/events", events);
route.use("/azan", azan);

export default route;
