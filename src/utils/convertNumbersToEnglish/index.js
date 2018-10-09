// @flow

const toEnglishDigits = (string: string) => {
  // convert persian digits [۰۱۲۳۴۵۶۷۸۹]
  let e = "۰".charCodeAt(0);

  // $flow-disable-line
  string = string.replace(/[۰-۹]/g, (t: *) => t.charCodeAt(0) - e);

  // convert arabic indic digits [٠١٢٣٤٥٦٧٨٩]
  e = "٠".charCodeAt(0);
  // $flow-disable-line
  string = string.replace(/[٠-٩]/g, (t: *) => t.charCodeAt(0) - e);
  return string;
};

export default toEnglishDigits;
