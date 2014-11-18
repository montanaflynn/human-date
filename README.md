# human-date [![NPM Version](http://img.shields.io/npm/v/human-date.svg?style=flat-square)](https://www.npmjs.org/package/human-date)

Making dates and times readable for humans. Plus a bunch of other date related goodies.

### Quick Start

##### Install:

```shell
npm install human-date --save
```

##### Usage:

```js
var hdate = require('human-date')

hdate.prettyPrint("8/16/1987")
// August 16th, 1987

hdate.relativeTime(60 * 60 * 24 * 2 * -1)
// 2 days ago

hdate.relativeTime("8/16/2015")
// 270 days, 22 hours, 27 minutes, 55 seconds from now

hdate.monthName("8/16/2015")
// August
```

### Methods

#### .prettyPrint(datestring or jsdate or numseconds)

##### Arguments: 

- __datestring `string`__ that can be parsed as a date (Eg. `"8/16/1987"`) 
- __jsdate `object`__ which is a javascript Date (Eg. `new Date("8/16/1987")`)
- __numseconds `integer`__ seconds to or from the current time (Eg. `-32`)

##### Returns:

- __`string`__ representing the date. (Eg. `"August 16th, 1987"`)

##### Examples:

```js
hdate.prettyPrint('8-16-1987')
// August 16th, 1987

hdate.prettyPrint(new Date('8-16-1987'))
// August 16th, 1987

hdate.prettyPrint(-6400)
// November 17th, 2014
```

#### .relativeTime(datestring or jsdate or numseconds, [options])

##### Arguments: 

- __datestring `string`__ that can be parsed as a date (Eg. `"8/16/1987"`) 
- __jsdate `object`__ which is a javascript Date (Eg. `new Date("8/16/1987")`)
- __numseconds `integer`__ seconds to or from the current time (Eg. `-32`)
- __options__: object with the following keys
    - __futureSuffix `string`__ default: `"from now"`
    - __pastSuffix `string`__ default: `"from now"`
    - __returnObject `boolean`__: default: `false`

##### Returns:

Depending on the option `returnObject` you will get a string or an object:

- __default `string`__ `"27 years 96 days 21 hours 47 minutes 2 seconds ago"`
- __`object`__ `{ seconds: 31, hours: 4, days: 101, years: 27, past: true }`

##### Examples:

```js
hdate.relativeTime(4)
// 4 seconds from now

hdate.relativeTime(4, {futureSuffix: "in the future"})
// 4 seconds in the future

hdate.relativeTime("8-16-1987")
// 27 years 96 days 21 hours 47 minutes 2 seconds ago

hdate.relativeTime(new Date("8-16-1987"))
// 27 years 96 days 21 hours 47 minutes 2 seconds ago

hdate.relativeTime(new Date("8-16-1987"), {returnObject: true})
// { seconds: 31, minutes: 5, hours: 4, days: 101, years: 27, past: true }
```

#### .monthName(datestring or jsdate or monthnum)

##### Arguments: 

- __datestring `string`__ that can be parsed as a date (Eg. `"8/16/1987"`) 
- __jsdate `object`__ which is a javascript Date (Eg. `new Date("8/16/1987")`)
- __monthnum `integer`__ the month number, not 0-indexed (Eg. `12`)

##### Returns:

- __`string`__

##### Examples:

```js
hdate.getHumanMonth(8)
// August

hdate.getHumanMonth("8-16-1987")
// August

hdate.getHumanMonth(new Date("8-16-1987"))
// August
```

#### .startOfDay(datestring or jsdate or epochtime)

##### Arguments: 

- __datestring `string`__ that can be parsed as a date (Eg. `"8/16/1987"`) 
- __jsdate `object`__ which is a javascript Date (Eg. `new Date("8/16/1987")`)
- __epochtime `integer`__ milliseconds from the epoch (Eg. `1416283449392`)

##### Returns:

- __`object`__ Native Date object set to the beginning of the given day

##### Examples:

```js
hdate.startOfDay("8-16-1987")
// Mon Aug 10 1987 00:00:00 GMT-0700 (PDT)

hdate.startOfDay(new Date("8-16-1987"))
// Mon Aug 10 1987 00:00:00 GMT-0700 (PDT)

hdate.startOfDay(1416583449392)
// Fri Nov 21 2014 00:00:00 GMT-0800
```

#### .startOfWeek(datestring or jsdate or epochtime)

##### Arguments: 

- __datestring `string`__ that can be parsed as a date (Eg. `"8/16/1987"`) 
- __jsdate `object`__ which is a javascript Date (Eg. `new Date("8/16/1987")`)
- __epochtime `integer`__ milliseconds from the epoch (Eg. `1416283449392`)

##### Returns:

- __`object`__ Native Date object set to the beginning of the given week

##### Examples:

```js
hdate.startOfWeek("8-16-1987")
// Mon Aug 10 1987 00:00:00 GMT-0700 (PDT)

hdate.startOfWeek(new Date("8-16-1987"))
// Mon Aug 10 1987 00:00:00 GMT-0700 (PDT)

hdate.startOfWeek(1416283449392)
// Mon Nov 17 2014 00:00:00 GMT-0800 (PST)
```

#### .startOfMonth(datestring or jsdate or epochtime)

##### Arguments: 

- __datestring `string`__ that can be parsed as a date (Eg. `"8/16/1987"`) 
- __jsdate `object`__ which is a javascript Date (Eg. `new Date("8/16/1987")`)
- __epochtime `integer`__ milliseconds from the epoch (Eg. `1416283449392`)

##### Returns:

- __`object`__ Native Date object set to the beginning of the given month

##### Examples:

```js
hdate.startOfMonth(new Date("8-16-1987"))
// Sat Aug 01 1987 00:00:00 GMT-0700 (PDT)

hdate.startOfMonth("8-16-1987")
// Sat Aug 01 1987 00:00:00 GMT-0700 (PDT)

hdate.startOfMonth(1416283449392)
// Sat Nov 01 2014 00:00:00 GMT-0700 (PDT)
```
#### .startOfYear(datestring or jsdate or epochtime)

##### Arguments: 

- __datestring `string`__ that can be parsed as a date (Eg. `"8/16/1987"`) 
- __jsdate `object`__ which is a javascript Date (Eg. `new Date("8/16/1987")`)
- __epochtime `integer`__ milliseconds from the epoch (Eg. `1416283449392`)

##### Returns:

- __`object`__ Native Date object set to the beginning of the given year

##### Examples:

```js
hdate.startOfYear(new Date("8-16-1987"))
// Thu Jan 01 1987 00:00:00 GMT-0800 (PST)

hdate.startOfYear("8-16-1987")
// Thu Jan 01 1987 00:00:00 GMT-0800 (PST)

hdate.startOfYear(1416283449392)
// Wed Jan 01 2014 00:00:00 GMT-0800 (PST)
```

#### .dayOfYear(datestring or jsdate or epochtime)

##### Arguments: 

- __datestring `string`__ that can be parsed as a date (Eg. `"8/16/1987"`) 
- __jsdate `object`__ which is a javascript Date (Eg. `new Date("8/16/1987")`)
- __epochtime `integer`__ milliseconds from the epoch (Eg. `1416283449392`)

##### Returns:

- __`integer`__: the day of the year (Eg. `245`)

##### Examples:

```js
hdate.isLeapYear("8/16/1987")
// false

hdate.isLeapYear("8/16/1988")
// true

hdate.isLeapYear(1416283449392)
// false
```

#### .isLeapYear(datestring or jsdate or epochtime)

##### Arguments: 

- __datestring `string`__ that can be parsed as a date (Eg. `"8/16/1987"`) 
- __jsdate `object`__ which is a javascript Date (Eg. `new Date("8/16/1987")`)
- __epochtime `integer`__ milliseconds from the epoch (Eg. `1416283449392`)

##### Returns:

- __`boolean`__: wether or not the given date is in a leap year

##### Examples:

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
- Add time information to prettyPrint (August 16th, 2014 at 5:00pm PST)
- Support different locales.
- Proper testing framework.

### Contributing

__Forks and pull requests are most welcomed.__

Please add any methods to test.js and run npm test to make sure nothing has broken before submitting a pull request. 
