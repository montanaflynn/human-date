# human-date

Making dates and times readable for humans. Plus a bunch of other goodies.

### Install

`npm install human-date --save`

### Methods

`.getHumanDate(arg)`

- __arg__ date | date string

`.getHumanTime(arg, options)`

- __arg__ date | date string | integer representing seconds in the future or past 

- _options_ object with the following keys:
    - _futureSuffix_ string (default: "from now") 
    - _pastSuffix_ string (default: "ago") 
    - _returnObject_ bool (default: false) 

`.getHumanMonth(arg)`

- __arg__ date | date string | integer representing month number, not 0 indexed 

`.getStartOfDay(arg)`

- __arg__ date | date string

`.getStartOfWeek(arg)`

- __arg__ date | date string

`.getStartOfMonth(arg)`

- __arg__ date | date string

`.getStartOfYear(arg)`

- __arg__ date | date string

`.isLeapYear(arg)`

- __arg__ date | date string

### Example Usage

#### getHumanDate 

```js
var hdate = require('human-date')

hdate.getHumanDate('8-16-1987')
// August 16th, 1987

hdate.getHumanDate(new Date('8-16-1987'))
// August 16th, 1987
```
#### getHumanTime 

```js
var hdate = require('human-date')

hdate.getHumanTime(4)
// 4 seconds from now

hdate.getHumanTime(-4)
// 4 seconds ago

hdate.getHumanTime("8-16-1987")
// 27 years 96 days 21 hours 47 minutes 2 seconds ago

hdate.getHumanTime("8-16-2020")
// 5 years 277 days 1 hours 41 minutes 43 seconds from now

hdate.getHumanTime(new Date("8-16-1987"))
// 27 years 96 days 21 hours 47 minutes 2 seconds ago

hdate.getHumanTime(new Date("8-16-1987"), {returnObject: true})
// { seconds: 31,
//  minutes: 5,
//  hours: 4,
//  days: 101,
//  years: 27,
//  past: true }
```

#### getHumanMonth 

```js
var hdate = require('human-date')

hdate.getHumanMonth(8)
// August

hdate.getHumanMonth("8-16-1987")
// August

hdate.getHumanMonth(new Date("8-16-1987"))
// August
```

#### getStartOf* 

```js
var hdate = require('human-date')

hdate.getStartOfDay(1416283449392)
// Mon Nov 17 2014 00:00:00 GMT-0800 (PST)

hdate.getStartOfWeek("8-16-1987")
// Mon Aug 10 1987 00:00:00 GMT-0700 (PDT)

hdate.getStartOfMonth("8-16-1987")
// Sat Aug 01 1987 00:00:00 GMT-0700 (PDT)

hdate.getStartOfYear("8-16-1987")
// Thu Jan 01 1987 00:00:00 GMT-0800 (PST)
```

#### isLeapYear 

```js
var hdate = require('human-date')

hdate.isLeapYear("8/16/1987")
// false

hdate.isLeapYear("8/16/1988")
// true
```

### Todos

- Add various options and helpers (prefixes, suffixes, etc...)
- Add time information to getHumanDate (August 16th, 2014 at 5:00pm PST)
- Support different locales.
- Proper testing framework.

### Contributing

__Forks and pull requests are most welcomed.__

Please add any methods to test.js and run npm test to make sure nothing has broken before submitting a pull request. 
