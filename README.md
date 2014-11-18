# human-date

Making dates and times readable for humans. Plus a bunch of other goodies.

### Quick Start

```shell
npm install human-date --save
```

```js
var hdate = require('human-date')

hdate.getHumanDate("8/16/1987")
// August 16th, 1987

hdate.getHumanTime(60 * 60 * 24 * 2 * -1)
// 2 days ago

hdate.getHumanTime("8/16/2015")
// 270 days, 22 hours, 27 minutes, 55 seconds from now
```

### Methods

#### .getHumanDate(jsdate or datestring or numseconds)

__arguments__: 

- __jsdate__: (`object`) a javascript date object (example: `new Date("8/16/1987")`)
- __datestring__: (`string`) anything that can be parsed as a date (example: `"8/16/1987"`) 
- __numseconds__: (`integer`) number of seconds to or from the current time (example: `-32`)

__returns__: 

- __Default__: (`string`) representing the date. (example: `"August 16th, 1987"`)

__examples__:

```js
hdate.getHumanDate('8-16-1987')
// August 16th, 1987

hdate.getHumanDate(new Date('8-16-1987'))
// August 16th, 1987

hdate.getHumanDate(-6400)
// November 17th, 2014
```

#### .getHumanTime(jsdate or datestring or numseconds, [options])

__arguments__: 

- __jsdate__: (`object`) a javascript date object (example: `new Date("8/16/1987")`)
- __datestring__: (`string`) anything that can be parsed as a date (example: `"8/16/1987"`) 
- __numseconds__: (`integer`) number of seconds to or from the current time (example: `-32`)
- __options__: object with the following keys
    - __futureSuffix__: (`string`) default: `"from now"`
    - __pastSuffix__: (`string`) default: `"from now"`
    - __returnObject__: (`boolean`) default: `false`

__returns__: 

Depending on the option `returnObject` you will get a string or an object:

- __Default__: (`string`) `"August 16th, 1987"`
- __Object__: (`object`) `{ seconds: 31, hours: 4, days: 101, years: 27, past: true }`

__examples__:

```js
hdate.getHumanTime(4)
// 4 seconds from now

hdate.getHumanTime(4, {futureSuffix: "in the future"})
// 4 seconds in the future

hdate.getHumanTime("8-16-1987")
// 27 years 96 days 21 hours 47 minutes 2 seconds ago

hdate.getHumanTime(new Date("8-16-1987"))
// 27 years 96 days 21 hours 47 minutes 2 seconds ago

hdate.getHumanTime(new Date("8-16-1987"), {returnObject: true})
// { seconds: 31, minutes: 5, hours: 4, days: 101, years: 27, past: true }
```

#### .getHumanMonth(jsdate or datestring or monthnum)

__arguments__: 

- __jsdate__: (`object`) a javascript date object (example: `new Date("8/16/1987")`)
- __datestring__: (`string`) anything that can be parsed as a date (example: `"8/16/1987"`) 
- __monthnum__: (`integer`) the month number, not 0-indexed (example: `12`)

__returns__: 

- __Default__: (`string`) `"December"`

__examples__:

```js
hdate.getHumanMonth(8)
// August

hdate.getHumanMonth("8-16-1987")
// August

hdate.getHumanMonth(new Date("8-16-1987"))
// August
```

#### .getStartOfDay(jsdate or datestring)

__arguments__: 

- __jsdate__: (`object`) a javascript date object (example: `new Date("8/16/1987")`)
- __datestring__: (`string`) anything that can be parsed as a date (example: `"8/16/1987"`) 
- __epochtime__: (`integer`) number of seconds from the current time (example: `1416283449392`)

__returns__: 

- __Default__: (`object`) Native Date object set to the beginning of the given day

__examples__:

```js
hdate.getStartOfDay("8-16-1987")
// Mon Aug 10 1987 00:00:00 GMT-0700 (PDT)

hdate.getStartOfDay(new Date("8-16-1987"))
// Mon Aug 10 1987 00:00:00 GMT-0700 (PDT)

hdate.getStartOfDay(1416583449392)
// Fri Nov 21 2014 00:00:00 GMT-0800
```

#### .getStartOfWeek(jsdate or datestring)

__arguments__: 

- __jsdate__: (`object`) a javascript date object (example: `new Date("8/16/1987")`)
- __datestring__: (`string`) anything that can be parsed as a date (example: `"8/16/1987"`) 
- __epochtime__: (`integer`) number of seconds from the current time (example: `1416283449392`)

__returns__: 

- __Default__: (`object`) Native Date object set to the beginning of the given week

__examples__:

```js
hdate.getStartOfWeek("8-16-1987")
// Mon Aug 10 1987 00:00:00 GMT-0700 (PDT)

hdate.getStartOfWeek(new Date("8-16-1987"))
// Mon Aug 10 1987 00:00:00 GMT-0700 (PDT)

hdate.getStartOfWeek(1416283449392)
// Mon Nov 17 2014 00:00:00 GMT-0800 (PST)
```

#### .getStartOfMonth(jsdate or datestring)

__arguments__: 

- __jsdate__: (`object`) a javascript date object (example: `new Date("8/16/1987")`)
- __datestring__: (`string`) anything that can be parsed as a date (example: `"8/16/1987"`) 
- __epochtime__: (`integer`) number of seconds from the current time (example: `1416283449392`)

__returns__: 

- __Default__: (`object`) Native Date object set to the beginning of the given month

__examples__:

```js
hdate.getStartOfMonth(new Date("8-16-1987"))
// Sat Aug 01 1987 00:00:00 GMT-0700 (PDT)

hdate.getStartOfMonth("8-16-1987")
// Sat Aug 01 1987 00:00:00 GMT-0700 (PDT)

hdate.getStartOfMonth(1416283449392)
// Sat Nov 01 2014 00:00:00 GMT-0700 (PDT)
```
#### .getStartOfYear(jsdate or datestring)

__arguments__: 

- __jsdate__: (`object`) a javascript date object (example: `new Date("8/16/1987")`)
- __datestring__: (`string`) anything that can be parsed as a date (example: `"8/16/1987"`) 
- __epochtime__: (`integer`) number of seconds from the current time (example: `1416283449392`)

__returns__: 

- __Default__: (`object`) Native Date object set to the beginning of the given year

__examples__:

```js
hdate.getStartOfYear(new Date("8-16-1987"))
// Thu Jan 01 1987 00:00:00 GMT-0800 (PST)

hdate.getStartOfYear("8-16-1987")
// Thu Jan 01 1987 00:00:00 GMT-0800 (PST)

hdate.getStartOfYear(1416283449392)
// Wed Jan 01 2014 00:00:00 GMT-0800 (PST)
```

#### .isLeapYear(jsdate or datestring)

__arguments__: 

- __jsdate__: (`object`) a javascript date object (example: `new Date("8/16/1987")`)
- __datestring__: (`string`) anything that can be parsed as a date (example: `"8/16/1987"`) 
- __epochtime__: (`integer`) number of seconds from the current time (example: `1416283449392`)

__returns__: 

- __boolean__: wether or not the given date is in a leap year

__examples__:

```js
hdate.isLeapYear("8/16/1987")
// false

hdate.isLeapYear("8/16/1988")
// true

hdate.isLeapYear(1416283449392)
// false
```

### Todos

- Add various options and helpers (prefixes, suffixes, etc...)
- Add time information to getHumanDate (August 16th, 2014 at 5:00pm PST)
- Support different locales.
- Proper testing framework.

### Contributing

__Forks and pull requests are most welcomed.__

Please add any methods to test.js and run npm test to make sure nothing has broken before submitting a pull request. 
