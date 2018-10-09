// @flow

const updateEventString = (string: string) => {
  const persianMonths = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند"
  ];
  persianMonths.map((month: string) => {
    string = string.replace(month, "");
  });
  return string
    .replace(/^[۱-۹]+/g, "")
    .replace(/\s\s+/g, " ")
    .trim();
};

export default updateEventString;
