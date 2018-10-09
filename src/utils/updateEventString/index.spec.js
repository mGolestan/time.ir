// @flow
import updateEventString from "./";

describe("updateEventString", () => {
  it("should remove month name and day number from string", () => {
    const string = "۱۵ مهر روز جهانی";
    expect(updateEventString(string)).toEqual("روز جهانی");
  });
});
