# time.ir
This is an easy-to-use api for iranian offcial date-time website ([Time.ir](http://time.ir)), Which gives you all features of it. Follow this readme for more info.

Table of contents
-
- [API Documentation](https://github.com/mGolestan/time.ir#api-documentation)
- [Getting started](https://github.com/mGolestan/time.ir#getting-started)
- [Production Use](https://github.com/mGolestan/time.ir#production-use)

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

Getting started
-
In order to install this repository in your local envirement or server, you just need to do commen things like what you do on the other js repositories.
<br/>Here we use nvm for switching the node version to the repository required node version. And we use yarn instead of npm.

```
$ git clone https://github.com/mGolestan/time.ir.git
$ nvm use
$ yarn
```

When the node_modules installed, next step is to run repository based on your need. (development or production)
Fore the development evirement you just need to `cd` to the repo directory and run in using below command
```
$ yarn start:dev
```

Production Use
-
While you are using this repo you have to be updated with the last version of it, because something in time.ir might change and this repo should update as well as time.ir changes.
Basically for running this for production usage there's an script that can help you with that, but before it the env vars should update. So, first we need a copy of `.env` with this name `.env.production.local`. use this commad while you're in the root of repo to copy .env file
```
$ cp .env .env.production.local
```
Then here you can edit variable of the new file. for production use it is highly suggested to alter then `NODE_ENV` to `production`.
There are 2 more vars that specify log level for `winston` module. [More details about winston log level](https://github.com/winstonjs/winston#logging)
Now just run below command to build all files (which will copy to `dist` directory in the root of repo) for production use.
```
$ yarn build
```
Then here you can run this repository on your own server for production. We recommend `pm2` process manager for Node.js, which you can easily findout how to work with it [HERE](https://pm2.io/runtime/), though I have written a simple usage of pm2 below
```
$ yarn add pm2 -g
or
$ npm install -g pm2
then
$ pm2 start dist/index.js --name="a name"
```
#
**Feel free to Contribute.**
