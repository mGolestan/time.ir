API Documentation
-
There's a table of api routes below

| Method | Route | Required Params | Description | More | Example Calls |
|---|---|---|---|---|---|
| GET | `/` | - | Application healCheck route, it also check availability of time.ir at first |   | [Click](http://46.4.162.92/) |
| GET | `/datetime` | - | Returns current time, with 3 seperate dates [`Shamsi`, `gregorian`, `Hijri`] | [Click](https://github.com/mGolestan/time.ir/blob/master/doc/routes/currentDateTime.md) | [Click](http://46.4.162.92/datetime) |
| GET | `/events` | [`year`, `month`, `day`] | Returns an array of events related to that day. **Note**: all parameters for this routes should be shamsi. | [Click](https://github.com/mGolestan/time.ir/blob/master/doc/routes/events.md) | [Click](http://46.4.162.92/events?year=1397&month=07&day=14) |
| GET | `/events/month` | [`year`, `month`] | Returns an array of events related to requested month. **Note**: all parameters for this routes should be in shamsi. | [Click](https://github.com/mGolestan/time.ir/blob/master/doc/routes/monthEvents.md) | [Click](http://46.4.162.92/events/month?year=1397&month=07) |
| GET | `/convert` | [`year`, `month`, `day`, `type`] | Returns a converted date based on entered value of `type`. accepted values for type are [`jalali`, `gregorian`, `hijri`]. **Attention:** type parameter should matches you other params. means that if yeah,month,day is in jalali type should be jalali as well.   | [Click](https://github.com/mGolestan/time.ir/blob/master/doc/routes/convertDate.md) | [Click](http://46.4.162.92/convert?year=1397&month=7&day=19&type=jalali) |
| GET | `/azan/times` | [`province`, `city`] | Returns Azan times based on the requested city. keys number for each city and province can be found on `/azan/cities` route.   | [Click](https://github.com/mGolestan/time.ir/blob/master/doc/routes/azan.md) | [Click](http://46.4.162.92/azan/times?province=8&city=95) |
| GET | `/cities` | - | Returns cities and province names and keys. which should use the keys to get Azan times for a city   | [Click](https://github.com/mGolestan/time.ir/blob/master/doc/routes/cities.md) | [Click](http://46.4.162.92/azan/cities) |