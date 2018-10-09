// @flow
import { promisify } from "util";
import { Router as router } from "express";
import { wrap } from "async-middleware";
import request from "request";
import { JSDOM } from "jsdom";
import { BadRequest } from "../utils/errors";
import loadEnv from "../utils/loadEnv";
import updateEventString from "../utils/updateEventString";

const route = router();
const promisifyRequest = promisify(request);

type GetEventRequestType = express$Request & {
  query: {
    day: string,
    month: string,
    year: string
  }
};

route.get(
  "/",
  wrap((req: GetEventRequestType, res: express$Response) => {
    const { day, month, year } = req.query;

    const url = `${loadEnv(
      "TIME_IR_MAIN_URL"
    )}/fa/event/list/0/${+year}/${+month}/${+day}`;

    promisifyRequest(url)
      .then((response: { statusCode: number, body: string }) => {
        const healthyStatusCode = 200;
        if (response.statusCode !== healthyStatusCode)
          throw new BadRequest("Bad Request to time.ir");

        let getEventsFromHtml = {};
        const events = [];
        const dom = new JSDOM(response.body);
        const getElementWithClass = dom.window.document.querySelector(
          ".eventsCurrentMonthTitle"
        );
        if (getElementWithClass)
          getEventsFromHtml = getElementWithClass.nextElementSibling.children;
        Object.keys(getEventsFromHtml).map((eventKey: string) => {
          const event = getEventsFromHtml[eventKey].textContent.trim();
          return events.push(updateEventString(event));
        });

        res.send(events);
      })
      .catch(() => {
        throw new BadRequest("Bad Request to time.ir");
      });
  })
);

export default route;
