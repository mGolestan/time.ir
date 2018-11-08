// @flow

import request from "supertest";
import flatten from "flat";
import type { MonthEventResponseType } from "../../src/utils/bodySelectors";

import app from "../../src/app";

describe("GET /events/month", () => {
  it(
    "returns expected keys on a valid request",
    () => {
      return request(app)
        .get("/events/month?year=1397&month=08")
        .expect(200)
        .then((res: { body: { events: Array<MonthEventResponseType> } }) => {
          const events = res.body.events;
          expect(Array.isArray(events)).toBe(true);

          // eslint-disable-next-line max-nested-callbacks
          events.map((event: MonthEventResponseType) => {
            const responseKeys = Object.keys(flatten(event));
            expect(responseKeys).toEqual(["day", "event", "isHoliday"]);
          });
        });
    },
    20000
  );
});
