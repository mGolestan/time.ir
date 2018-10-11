// @flow
import toEnglishDigit from "./";

describe("toEnglishDigit", () => {
  it("should return english digits on persian numbers", () => {
    expect(toEnglishDigit("۱۲۳۴۵۶۷۸۹۰")).toEqual("1234567890");
  });

  it("should return english digits on persian numbers mixed with words", () => {
    expect(toEnglishDigit("۱۲۳۴۵۶۷۸۹۰ سلام")).toEqual("1234567890 سلام");
  });

  it("should return english digits on arabic numbers", () => {
    expect(toEnglishDigit("٠١٢٣٤٥٦٧٨٩")).toEqual("0123456789");
  });

  it("should return english digits on arabic numbers mixed with words", () => {
    expect(toEnglishDigit("٠١٢٣٤٥٦٧٨٩ السلام")).toEqual("0123456789 السلام");
  });
});
