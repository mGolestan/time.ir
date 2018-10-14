API Documentation
-
There's a table of api routes below

| Method | Route | Required Params | Description | More | Example Calls |
|---|---|---|---|---|---|
| GET | `/` | - | Application healCheck route, it also check availability of time.ir at first |   | [Click](http://46.4.162.92/) |
| GET | `/datetime` | - | Returns current time, with 3 seperate dates [`Shamsi`, `gregorian`, `Hijri`] |   | [Click](http://46.4.162.92/datetime) |
| GET | `/events` | [`year`, `month`, `day`] | Returns an array of events related to that day. **Note**: all parameters for this routes should be shamsi. |   | [Click](http://46.4.162.92/events?year=1397&month=07&day=14) |
| GET | `/convert` | [`year`, `month`, `day`, `type`] | Returns a converted date based on entered value of `type`. accepted values for type are [`jalali`, `gregorian`, `hijri`]. **Attention:** type parameter should matches you other params. means that if yeah,month,day is in jalali type should be jalali as well.   |   | [Click](http://46.4.162.92/convert?year=1397&month=7&day=19&type=jalali) |
| GET | `/azan/time` | [`province`, `city`] | Returns Azan times based on the requested city. keys number for each city and province can be found on `/azan/cities` route.   |   | [Click](http://46.4.162.92/azan/times?province=8&city=95) |
| GET | `/cities` | - | Returns cities and province names and keys. which should use the keys to get Azan times for a city   |   | [Click](http://46.4.162.92/azan/cities) |