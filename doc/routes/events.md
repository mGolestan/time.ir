# Day Events

    GET /events

## Description

Returns all events of a day.

---

## Parameters

(required) all parameters

* **year** — a year in number format
* **month** — a month in number format
* **day** — a day in number format

---

## Return format

```json
{
  "events": ["Array of events"]
}
```

---

## Errors

* **400 Bad Request** — Request did not contain one of the required parameters.
* **500 Internal Server Error** — there is a problem with time.ir

---

## Example

**Request**

    GET /events?year=1397&month=07&day=14

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
