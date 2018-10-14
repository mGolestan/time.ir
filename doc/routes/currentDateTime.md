# Day Events

    GET /datetime

## Description

Returns an object that contains current time and dates in 3 formats (`shamsi`, `gregorian`, `hijri`)

---

## Parameters

no parameters required

---

## Return format

```
{
  "time": time with this format hh:ii:ss,
  "dates": {
    "shamsi": {
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
}
```

---

## Errors

* **500 Internal Server Error** — there is a problem with time.ir

---

## Example

**Request**

    GET /datetime

**Return**

```json
{
  "time": "01:30:00",
  "dates": {
    "shamsi": {
      "numeral": "1397-07-23",
      "text": "دوشنبه - 23 مهر 1397"
    },
    "gregorian": {
      "numeral": "2018-10-15",
      "text": "Monday - 2018 15 October"
    },
    "hijri": {
      "numeral": "1440-02-05",
      "text": "الإثنين - 5 صفر 1440"
    }
  }
}
```
