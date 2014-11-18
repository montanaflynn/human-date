# human-date

Making dates and times readable for humans. Plus a bunch of other goodies.

### Install

`npm install human-date --save`

### Methods

`.getHumanDate(arg)`

- _arg_ can be a date object or string that parses into a date object.

`.getHumanTime(arg)`

- _arg_ can be an integer representing seconds or a date string / object. Positive numbers represent the future and negative the past.

`.getHumanMonth(arg)`

- _arg_ can be an integer representing the month or a date string / object. Month number is not 0 indexed, for instance 1 represents January.

`.getStartOfDay(arg)`

- _arg_ can be a date object or string that parses into a date object.

`.getStartOfWeek(arg)`

- _arg_ can be a date object or string that parses into a date object.

`.getStartOfMonth(arg)`

- _arg_ can be a date object or string that parses into a date object.

`.getStartOfYear(arg)`

- _arg_ can be a date object or string that parses into a date object.

`.isLeapYear(arg)`

- _arg_ can be a date object or string that parses into a date object.

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
