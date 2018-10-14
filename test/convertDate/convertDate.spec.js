// @flow

import request from "supertest";
import flatten from "flat";

import app from "../../src/app";

describe("GET /convert", () => {
  it(
    "returns a valid result on a valid request for hijri type",
    () => {
      return request(app)
        .get("/convert?year=1397&month=7&day=19&type=hijri")
        .expect(200)
        .then(res => {
          expect(res.body).toMatchSnapshot();
          const responseKeys = Object.keys(flatten(res.body));
          expect(responseKeys).toEqual([
            "jalali.numeral",
            "jalali.text",
            "gregorian.numeral",
            "gregorian.text",
            "hijri.numeral",
            "hijri.text"
          ]);
        });
    },
    20000
  );

  it(
    "returns a valid result on a valid request for jalali type",
    () => {
      return request(app)
        .get("/convert?year=1396&month=2&day=29&type=jalali")
        .expect(200)
        .then(res => {
          expect(res.body).toMatchSnapshot();
          const responseKeys = Object.keys(flatten(res.body));
          expect(responseKeys).toEqual([
            "jalali.numeral",
            "jalali.text",
            "gregorian.numeral",
            "gregorian.text",
            "hijri.numeral",
            "hijri.text"
          ]);
        });
    },
    20000
  );

  it(
    "returns a valid result on a valid request for gregorian type",
    () => {
      return request(app)
        .get("/convert?year=1394&month=9&day=14&type=gregorian")
        .expect(200)
        .then(res => {
          expect(res.body).toMatchSnapshot();
          const responseKeys = Object.keys(flatten(res.body));
          expect(responseKeys).toEqual([
            "jalali.numeral",
            "jalali.text",
            "gregorian.numeral",
            "gregorian.text",
            "hijri.numeral",
            "hijri.text"
          ]);
        });
    },
    20000
  );
});
