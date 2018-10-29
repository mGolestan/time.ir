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

* **204 No Content** — This status returns on a day with no event.
* **400 Bad Request** — Request did not contain one of the required parameters.
* **500 Internal Server Error** — there is a problem with time.ir

---

## Example

**Request**

    GET /events?year=1397&month=07&day=14

**Return**

```json
{
    "events": [
        "روز دامپزشکی"
    ]
}
```
