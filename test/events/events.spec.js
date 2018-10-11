// @flow

import request from "supertest";

import app from "../../src/app";

describe("GET /events", () => {
  it(
    "should return an array with 2 values on a day with two events",
    () => {
      return request(app)
        .get("/events?year=1397&month=07&day=13")
        .expect(200)
        .then((res: { body: Array<string> }) => {
          expect(res.body.length).toEqual(2);
        });
    },
    20000
  );

  it(
    "should return an empty array on a day with no events",
    () => {
      return request(app)
        .get("/events?year=1397&month=07&day=15")
        .expect(200)
        .then((res: { body: Array<string> }) => {
          expect(res.body.length).toEqual(0);
        });
    },
    20000
  );
});
