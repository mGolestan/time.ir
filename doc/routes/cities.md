# Day Events

    GET /azan/cities

## Description

Returns cities and province names and keys. which should use the keys to get Azan times for a city

---

## Parameters

no parameters required

---

## Return format

```
[
  {
    "name": string,
    "key": string | number
    cities: [
      {
        "name": string,
        "key": string | number
      }
    ]
  }
]
```

## Errors

* **500 Internal Server Error** — there is a problem with time.ir

---

## Example

**Request**

    GET /azan/cities

**Return**

```json
[
  {
    "name": "تهران",
    "key": 8,
    "cities": [
      {
        "name": "اسلامشهر",
        "key": "29"
      },
      {
        "name": "پاکدشت",
        "key": "81"
      },
      {
        "name": "تهران بزرگ",
        "key": "95"
      },
      {
        "name": "دماوند",
        "key": "139"
      },
      {
        "name": "رباط کریم",
        "key": "150"
      },
      {
        "name": "ری",
        "key": "160"
      },
      {
        "name": "ساوجبلاغ",
        "key": "168"
      },
      {
        "name": "شمیرانات",
        "key": "197"
      },
      {
        "name": "شهریار",
        "key": "201"
      },
      {
        "name": "فیروزکوه",
        "key": "227"
      },
      {
        "name": "ورامین",
        "key": "318"
      }
    ]
  },
  {
    "name": "خراسان رضوی",
    "key": 10,
    "cities": [
      {
        "name": "بجستان",
        "key": "348"
      },
      {
        "name": "بردسکن",
        "key": "53"
      },
      {
        "name": "تایباد",
        "key": "86"
      },
      {
        "name": "تربت جام",
        "key": "88"
      },
      {
        "name": "تربت حیدریه",
        "key": "89"
      },
      {
        "name": "چناران",
        "key": "112"
      },
      {
        "name": "خلیل آباد",
        "key": "122"
      },
      {
        "name": "خواف",
        "key": "126"
      },
      {
        "name": "درگز",
        "key": "131"
      },
      {
        "name": "رشتخوار",
        "key": "153"
      },
      {
        "name": "سبزوار",
        "key": "170"
      },
      {
        "name": "سرخس",
        "key": "177"
      },
      {
        "name": "فردوس",
        "key": "219"
      },
      {
        "name": "فریمان",
        "key": "222"
      },
      {
        "name": "قوچان",
        "key": "235"
      },
      {
        "name": "کاشمر",
        "key": "239"
      },
      {
        "name": "کلات",
        "key": "322"
      },
      {
        "name": "گناباد",
        "key": "260"
      },
      {
        "name": "مشهد",
        "key": "284"
      },
      {
        "name": "نیشابور",
        "key": "310"
      }
    ]
  },
  {
    "name": "خوزستان",
    "key": 11,
    "cities": [
      {
        "name": "آبادان",
        "key": "1"
      },
      {
        "name": "امیدیه",
        "key": "36"
      },
      {
        "name": "اندیمشک",
        "key": "37"
      },
      {
        "name": "اهواز",
        "key": "39"
      },
      {
        "name": "ایذه",
        "key": "41"
      },
      {
        "name": "باغ ملک",
        "key": "47"
      },
      {
        "name": "بندرماهشهر",
        "key": "66"
      },
      {
        "name": "بهبهان",
        "key": "68"
      },
      {
        "name": "خرمشهر",
        "key": "120"
      },
      {
        "name": "دزفول",
        "key": "133"
      },
      {
        "name": "دشت آزادگان",
        "key": "134"
      },
      {
        "name": "رامهرمز",
        "key": "147"
      },
      {
        "name": "شادگان",
        "key": "191"
      },
      {
        "name": "شوش",
        "key": "202"
      },
      {
        "name": "شوشتر",
        "key": "203"
      },
      {
        "name": "لالی",
        "key": "265"
      },
      {
        "name": "مسجدسلیمان",
        "key": "282"
      },
      {
        "name": "هندیجان",
        "key": "317"
      }
    ]
  }
  .
  .
  .
]
```
