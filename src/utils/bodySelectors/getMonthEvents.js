// @flow
import { JSDOM } from "jsdom";
import toEnglishDigits from "../toEnglishDigits";
import updateEventString from "../updateEventString";

export type MonthEventResponseType = {
  day: string | number,
  event: string,
  holiday: boolean
};

const getDayEvents = (body: string): Promise<Array<MonthEventResponseType>> => {
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

    return events.push({
      day: toEnglishDigits(event.match(/^[۱-۹]+/g).shift()),
      event: updateEventString(event),
      holiday: getEventsFromHtml[eventKey].classList.contains("eventHoliday")
    });
  });

  return Promise.resolve(events);
};

export default getDayEvents;
