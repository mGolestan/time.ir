# Day Events

    GET /events/month

## Description

Returns all events of a month.

---

## Parameters

(required) all parameters

* **year** — a year in number format
* **month** — a month in number format

---

## Return format

```json
{
  "events": [
    {
      "day": "string",
      "event": "string",
      "isHoliday": "boolean"
    }
  ]
}
```

---

## Errors

* **400 Bad Request** — Request did not contain one of the required parameters.
* **500 Internal Server Error** — there is a problem with time.ir

---

## Example

**Request**

    GET /events?year=1397&month=07

**Return**

```json
{
  "events": [
    {
      "day": "1",
      "event": "روز بزرگداشت ابوعلی سینا و روز پزشک",
      "isHoliday": false
    },
    {
      "day": "2",
      "event": "آغاز هفته دولت",
      "isHoliday": false
    },
    {
      "day": "4",
      "event": "زادروز داراب (کوروش)",
      "isHoliday": false
    },
    {
      "day": "8",
      "event": "عید سعید غر خم [ ١٨ ذوالحجه ]",
      "isHoliday": true
    }
  ]
}
```
