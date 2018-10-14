# Day Events

    GET /convert

## Description

Returns converted dates based on entered value of `type`

---

## Parameters

(required) all parameters

* **year** — a year in number format
* **month** — a month in number format
* **day** — a day in number format
* **type** — type of other params that is entered, accepted values [`jalali`, `gregorian`, `hijri`]

---

## Return format

```
{
  "jalali": {
    "numeral": date in numeral format yyyy-mm-dd,
    "text": a string of date
  },
  "gregorian": {
    "numeral": date in numeral format yyyy-mm-dd,
    "text": a string of date
  },
  "hijri": {
    "numeral": date in numeral format yyyy-mm-dd,
    "text": a string of date
  }
}
```

## Errors

* **400 Bad Request** — Request did not contain one of the required parameters or invalid parameter is entered
* **500 Internal Server Error** — there is a problem with time.ir

---

## Example

**Request**

    GET /convert?year=1397&month=7&day=19&type=hijri

**Return**

```json
{
  "jalali": {
    "numeral": "1397-07-19",
    "text": "پنج شنبه، 19 مهر 1397"
  },
  "gregorian": {
    "numeral": "2018-10-11",
    "text": "Thursday, October 11, 2018"
  },
  "hijri": {
    "numeral": "1440-02-01",
    "text": "الخمیس‬، 1 صفر 1440"
  }
}
```
