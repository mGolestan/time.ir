// @flow

import request from "supertest";
import flatten from "flat";

import app from "../../src/app";

describe("GET /", () => {
  it(
    "returns expected keys on a valid request",
    () => {
      return request(app)
        .get("/datetime")
        .expect(200)
        .then(res => {
          const responseKeys = Object.keys(flatten(res.body));
          expect(responseKeys).toEqual([
            "time",
            "dates.shamsi.numeral",
            "dates.shamsi.text",
            "dates.gregorian.numeral",
            "dates.gregorian.text",
            "dates.hijri.numeral",
            "dates.hijri.text"
          ]);
        });
    },
    20000
  );
});
