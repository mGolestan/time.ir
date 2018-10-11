// @flow

import request from "supertest";

import app from "../../src/app";

describe("GET /", () => {
  it(
    "returns a valid result on a valid request",
    () => {
      return request(app)
        .get("/")
        .expect(200)
        .then(res => {
          expect(res.body).toMatchSnapshot();
        });
    },
    20000
  );
});
