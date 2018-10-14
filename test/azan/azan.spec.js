// @flow

import request from "supertest";
import flatten from "flat";

import app from "../../src/app";

describe("GET /azan/times", () => {
  it(
    "returns expected keys on a valid request",
    () => {
      return request(app)
        .get("/azan/times?province=8&city=95")
        .expect(200)
        .then(res => {
          const responseKeys = Object.keys(flatten(res.body));
          expect(responseKeys).toEqual([
            "provinceName",
            "cityName",
            "times.morning",
            "times.sunrise",
            "times.noon",
            "times.sunset",
            "times.night",
            "times.midNight"
          ]);
        });
    },
    20000
  );

  it("returns bad requested on non-valid keys", () => {
    return request(app)
      .get("/azan/times?province=8&city=950")
      .expect(400);
  });
});
