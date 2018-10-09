// @flow
import { JSDOM } from "jsdom";
import toEnglishDigits from "../toEnglishDigits";

export type CurrentDateObjectType = {
  shamsi: { numeral: string, text: string },
  gregorian: { numeral: string, text: string },
  hijri: { numeral: string, text: string }
};

const getCurrentDate = (body: string): Promise<CurrentDateObjectType> => {
  const dom = new JSDOM(body);
  const ShamsiNumeralDate = toEnglishDigits(
    dom.window.document
      .querySelector(".today-shamsi .dateTypeBody .numeral")
      .textContent.split("/")
      .join("-")
  );
  const ShamsiNormalTextDate = toEnglishDigits(
    dom.window.document
      .querySelector(".today-shamsi .dateTypeBody .date")
      .textContent.split("/")
      .join("-")
  );

  const GregorianNumeralDate = toEnglishDigits(
    dom.window.document
      .querySelector(".today-gregorian .dateTypeBody .numeral")
      .textContent.split("/")
      .join("-")
  );
  const GregorianNormalTextDate = toEnglishDigits(
    dom.window.document
      .querySelector(".today-gregorian .dateTypeBody .date")
      .textContent.split("/")
      .join("-")
  );

  const HijriNumeralDate = toEnglishDigits(
    dom.window.document
      .querySelector(".today-hijri .dateTypeBody .numeral")
      .textContent.split("/")
      .join("-")
  );
  const HijriNormalTextDate = toEnglishDigits(
    dom.window.document
      .querySelector(".today-hijri .dateTypeBody .date")
      .textContent.split("/")
      .join("-")
  );

  return Promise.resolve({
    shamsi: {
      numeral: ShamsiNumeralDate,
      text: ShamsiNormalTextDate
    },
    gregorian: {
      numeral: GregorianNumeralDate,
      text: GregorianNormalTextDate
    },
    hijri: {
      numeral: HijriNumeralDate,
      text: HijriNormalTextDate
    }
  });
};

export default getCurrentDate;
