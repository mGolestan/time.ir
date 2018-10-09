// @flow
import { JSDOM } from "jsdom";
import updateEventString from "../updateEventString";

const getDayEvents = (body: string): Promise<Array<string>> => {
  let getEventsFromHtml = {};
  const events = [];
  const dom = new JSDOM(body);
  const getElementWithClass = dom.window.document.querySelector(
    ".eventsCurrentMonthTitle"
  );
  if (getElementWithClass)
    getEventsFromHtml = getElementWithClass.nextElementSibling.children;
  Object.keys(getEventsFromHtml).map((eventKey: string) => {
    const event = getEventsFromHtml[eventKey].textContent.trim();
    return events.push(updateEventString(event));
  });

  return Promise.resolve(events);
};

export default getDayEvents;
