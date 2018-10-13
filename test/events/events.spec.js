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
        .then((res: { body: { events: Array<string> } }) => {
          expect(res.body.events.length).toEqual(2);
        });
    },
    20000
  );

  it(
    "should return an empty array with 204 statusCode for a day with no events",
    () => {
      return request(app)
        .get("/events?year=1397&month=07&day=15")
        .expect(204);
    },
    20000
  );
});
