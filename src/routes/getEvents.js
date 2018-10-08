// @flow
import { promisify } from "util";
import { Router as router } from "express";
import { wrap } from "async-middleware";
import request from "request";
import { JSDOM } from "jsdom";
import { BadRequest } from "../utils/errors";

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

    // $flow-disable-line
    const url = `http://www.time.ir/fa/event/list/0/${year}/${month}/${day}`;

    promisifyRequest(url).then((err: *, response: *, body: *) => {
      if (err) {
        throw new BadRequest("Bad Request to time.ir");
      }

      let getEventsFromHtml = {};
      const messages = [];
      const dom = new JSDOM(body);
      const getElementWithClass = dom.window.document.querySelector(
        ".eventsCurrentMonthTitle"
      );
      if (getElementWithClass)
        getEventsFromHtml = getElementWithClass.nextElementSibling.children;
      Object.keys(getEventsFromHtml).map((eventKey: string) => {
        const msg = getEventsFromHtml[eventKey].textContent.trim();
        return messages.push({ event: msg });
      });

      res.send(messages);
    });
  })
);

export default route;
