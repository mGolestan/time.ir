# time.ir
This is an easy-to-use api for iranian offcial date time website ([Time.ir](http://time.ir)).
<br/> Feel free to Contribute.

API Documentation
-
There's a table of api routes below

| Method | Route | Required Params | Description | More | Example Calls |
|---|---|---|---|---|---|
| GET | `/` | - | Application healCheck route, it also check availability of time.ir at first |   | [Click](http://46.4.162.92:3000/) |
| GET | `/datetime` | - | Returns current time, with 3 seperate dates [`Shamsi`, `gregorian`, `Hijri`] |   | [Click](http://46.4.162.92:3000/datetime) |
| GET | `/events` | [`year`, `month`, `day`] | Returns an array of events related to that day. **Note**: all parameters for this routes should be shamsi. |   | [Click](http://46.4.162.92:3000/events?year=1397&month=07&day=14) |
