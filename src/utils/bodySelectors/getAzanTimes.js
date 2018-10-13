// @flow
import { JSDOM } from "jsdom";
import toEnglishDigits from "../toEnglishDigits";

const removeWhiteSpaces = (string: string) =>
  string.replace(new RegExp(" ", "g"), "");

export type AzanObjectType = {
  morning: string,
  sunrise: string,
  noon: string,
  sunset: string,
  night: string,
  midNight: string
};

const getCurrentDate = (body: string): Promise<AzanObjectType> => {
  const dom = new JSDOM(body);

  const morning = removeWhiteSpaces(
    toEnglishDigits(
      dom.window.document.querySelector(".ephemerisAzanMorning")
        .nextElementSibling.textContent
    )
  );

  const sunrise = removeWhiteSpaces(
    toEnglishDigits(
      dom.window.document.querySelector(".ephemerisAzanSunrise")
        .nextElementSibling.textContent
    )
  );

  const noon = removeWhiteSpaces(
    toEnglishDigits(
      dom.window.document.querySelector(".ephemerisAzanMoon").nextElementSibling
        .textContent
    )
  );

  const sunset = removeWhiteSpaces(
    toEnglishDigits(
      dom.window.document.querySelector(".ephemerisAzanSunset")
        .nextElementSibling.textContent
    )
  );

  const night = removeWhiteSpaces(
    toEnglishDigits(
      dom.window.document.querySelector(".ephemerisAzanNight")
        .nextElementSibling.textContent
    )
  );

  const midNight = removeWhiteSpaces(
    toEnglishDigits(
      dom.window.document.querySelector(".ephemerisMidNight").nextElementSibling
        .textContent
    )
  );

  return Promise.resolve({
    morning,
    sunrise,
    noon,
    sunset,
    night,
    midNight
  });
};

export default getCurrentDate;
