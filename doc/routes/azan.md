# Day Events

    GET /azan/times

## Description

Returns Azan times based on the requested city. keys number for each city and province can be found on `/azan/cities` route.

---

## Parameters

* **province** — province key (key are specified in `/azan/cities` route)
* **city** — city key (key are specified in `/azan/cities` route)

---

## Return format

```
{
  "provinceName": string,
  "cityName": string,
  "times": {
    "morning": string,
    "sunrise": string,
    "noon": string,
    "sunset": string,
    "night": string,
    "midNight": string
  }
}
```

---

## Errors

* **400 Bad Request** — Request did not contain one of the required parameters or invalid parameter is entered
* **500 Internal Server Error** — there is a problem with time.ir

---

## Example

**Request**

    GET /azan/times?province=8&city=95

**Return**

```json
{
  "provinceName": "تهران",
  "cityName": "تهران بزرگ",
  "times": {
    "morning": "04:46",
    "sunrise": "06:10",
    "noon": "11:50",
    "sunset": "17:29",
    "night": "17:47",
    "midNight": "23:08"
  }
}
```
