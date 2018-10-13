// @flow
import { JSDOM } from "jsdom";
import toEnglishDigits from "../toEnglishDigits";

const replaceDateSeparators = (string: string) => string.split("/").join("-");

export type CurrentDateObjectType = {
  jalali: { numeral: string, text: string },
  gregorian: { numeral: string, text: string },
  hijri: { numeral: string, text: string }
};

const getCurrentDate = (body: string): Promise<CurrentDateObjectType> => {
  const dom = new JSDOM(body);
  let ShamsiNumeralDate;
  let ShamsiNormalTextDate;
  let GregorianNumeralDate;
  let GregorianNormalTextDate;
  let HijriNumeralDate;
  let HijriNormalTextDate;

  try {
    ShamsiNumeralDate = replaceDateSeparators(
      toEnglishDigits(
        dom.window.document.querySelector("#divConvert .jalali .numeral")
          .textContent
      )
    );
    ShamsiNormalTextDate = replaceDateSeparators(
      toEnglishDigits(
        dom.window.document.querySelector("#divConvert .jalali .normal")
          .textContent
      )
    );
  } catch (err) {
    ShamsiNumeralDate = replaceDateSeparators(
      toEnglishDigits(
        dom.window.document.querySelector(
          "#divConvert .dateConvertFirstDate .numeral"
        ).textContent
      )
    );
    ShamsiNormalTextDate = replaceDateSeparators(
      toEnglishDigits(
        dom.window.document.querySelector(
          "#divConvert .dateConvertFirstDate .normal"
        ).textContent
      )
    );
  }

  try {
    GregorianNumeralDate = replaceDateSeparators(
      toEnglishDigits(
        dom.window.document.querySelector("#divConvert .gregorian .numeral")
          .textContent
      )
    );
    GregorianNormalTextDate = replaceDateSeparators(
      toEnglishDigits(
        dom.window.document.querySelector("#divConvert .gregorian .normal")
          .textContent
      )
    );
  } catch (err) {
    GregorianNumeralDate = replaceDateSeparators(
      toEnglishDigits(
        dom.window.document.querySelector(
          "#divConvert .dateConvertFirstDate .numeral"
        ).textContent
      )
    );
    GregorianNormalTextDate = replaceDateSeparators(
      toEnglishDigits(
        dom.window.document.querySelector(
          "#divConvert .dateConvertFirstDate .normal"
        ).textContent
      )
    );
  }

  try {
    HijriNumeralDate = replaceDateSeparators(
      toEnglishDigits(
        dom.window.document.querySelector("#divConvert .qamari .numeral")
          .textContent
      )
    );
    HijriNormalTextDate = replaceDateSeparators(
      toEnglishDigits(
        dom.window.document.querySelector("#divConvert .qamari .normal")
          .textContent
      )
    );
  } catch (err) {
    HijriNumeralDate = replaceDateSeparators(
      toEnglishDigits(
        dom.window.document.querySelector(
          "#divConvert .dateConvertFirstDate .numeral"
        ).textContent
      )
    );
    HijriNormalTextDate = replaceDateSeparators(
      toEnglishDigits(
        dom.window.document.querySelector(
          "#divConvert .dateConvertFirstDate .normal"
        ).textContent
      )
    );
  }

  return Promise.resolve({
    jalali: {
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
