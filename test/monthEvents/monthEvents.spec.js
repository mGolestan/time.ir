// @flow

import request from "supertest";
import flatten from "flat";

import app from "../../src/app";

type MonthEventResponseType = {
  day: string | number,
  event: string,
  holiday: boolean
};

describe("GET /events/month", () => {
  it(
    "returns expected keys on a valid request",
    () => {
      return request(app)
        .get("/events/month?year=1397&month=08")
        .expect(200)
        .then((res: { body: Array<MonthEventResponseType> }) => {
          expect(Array.isArray(res.body)).toBe(true);

          // eslint-disable-next-line max-nested-callbacks
          res.body.map((event: MonthEventResponseType) => {
            const responseKeys = Object.keys(flatten(event));
            expect(responseKeys).toEqual(["day", "event", "holiday"]);
          });
        });
    },
    20000
  );
});
