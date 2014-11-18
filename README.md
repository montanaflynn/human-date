# human-date

Making dates and times readable for humans. Plus a bunch of other date related goodies.

## ToC

- [Quick Start](https://github.com/montanaflynn/human-date#quick-start)
- [Methods](https://github.com/montanaflynn/human-date#methods)
    - [getHumanDate](https://github.com/montanaflynn/human-date#gethumandatejsdate-or-datestring-or-numseconds)
    - [getHumanTime](https://github.com/montanaflynn/human-date#gethumantimejsdate-or-datestring-or-numseconds-options)
    - [getHumanMonth](https://github.com/montanaflynn/human-date#gethumanmonthjsdate-or-datestring-or-monthnum)
    - [getStartOfDay](https://github.com/montanaflynn/human-date#getstartofdayjsdate-or-datestring)
    - [getStartOfWeek](https://github.com/montanaflynn/human-date#getstartofweekjsdate-or-datestring)
    - [getStartOfMonth](https://github.com/montanaflynn/human-date#getstartofmonthjsdate-or-datestring)
    - [getStartOfYear](https://github.com/montanaflynn/human-date#getstartofyearjsdate-or-datestring)
    - [isLeapYear](https://github.com/montanaflynn/human-date#isleapyearjsdate-or-datestring)
- [Todos](https://github.com/montanaflynn/human-date#todos)
- [Contributing](https://github.com/montanaflynn/human-date#contributing)

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

##### Arguments: 

- __jsdate `object`__ which is a javascript Date (Eg. `new Date("8/16/1987")`)
- __datestring `string`__ that can be parsed as a date (Eg. `"8/16/1987"`) 
- __numseconds `integer`__ seconds to or from the current time (Eg. `-32`)

##### Returns:

- __`string`__ representing the date. (Eg. `"August 16th, 1987"`)

##### Examples:

```js
hdate.getHumanDate('8-16-1987')
// August 16th, 1987

hdate.getHumanDate(new Date('8-16-1987'))
// August 16th, 1987

hdate.getHumanDate(-6400)
// November 17th, 2014
```

#### .getHumanTime(jsdate or datestring or numseconds, [options])

##### Arguments: 

- __jsdate `object`__ which is a javascript Date (Eg. `new Date("8/16/1987")`)
- __datestring `string`__ that can be parsed as a date (Eg. `"8/16/1987"`) 
- __numseconds `integer`__  seconds to or from the current time (Eg. `-32`)
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

##### Arguments: 

- __jsdate `object`__ which is a javascript Date (Eg. `new Date("8/16/1987")`)
- __datestring `string`__ that can be parsed as a date (Eg. `"8/16/1987"`) 
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

#### .getStartOfDay(jsdate or datestring)

##### Arguments: 

- __jsdate `object`__ which is a javascript Date (Eg. `new Date("8/16/1987")`)
- __datestring `string`__ that can be parsed as a date (Eg. `"8/16/1987"`) 
- __epochtime `integer`__ milliseconds from the epoch (Eg. `1416283449392`)

##### Returns:

- __`object`__ Native Date object set to the beginning of the given day

##### Examples:

```js
hdate.getStartOfDay("8-16-1987")
// Mon Aug 10 1987 00:00:00 GMT-0700 (PDT)

hdate.getStartOfDay(new Date("8-16-1987"))
// Mon Aug 10 1987 00:00:00 GMT-0700 (PDT)

hdate.getStartOfDay(1416583449392)
// Fri Nov 21 2014 00:00:00 GMT-0800
```

#### .getStartOfWeek(jsdate or datestring)

##### Arguments: 

- __jsdate `object`__ which is a javascript Date (Eg. `new Date("8/16/1987")`)
- __datestring `string`__ that can be parsed as a date (Eg. `"8/16/1987"`) 
- __epochtime `integer`__ milliseconds from the epoch (Eg. `1416283449392`)

##### Returns:

- __`object`__ Native Date object set to the beginning of the given week

##### Examples:

```js
hdate.getStartOfWeek("8-16-1987")
// Mon Aug 10 1987 00:00:00 GMT-0700 (PDT)

hdate.getStartOfWeek(new Date("8-16-1987"))
// Mon Aug 10 1987 00:00:00 GMT-0700 (PDT)

hdate.getStartOfWeek(1416283449392)
// Mon Nov 17 2014 00:00:00 GMT-0800 (PST)
```

#### .getStartOfMonth(jsdate or datestring)

##### Arguments: 

- __jsdate `object`__ which is a javascript Date (Eg. `new Date("8/16/1987")`)
- __datestring `string`__ that can be parsed as a date (Eg. `"8/16/1987"`) 
- __epochtime `integer`__ milliseconds from the epoch (Eg. `1416283449392`)

##### Returns:

- __`object`__ Native Date object set to the beginning of the given month

##### Examples:

```js
hdate.getStartOfMonth(new Date("8-16-1987"))
// Sat Aug 01 1987 00:00:00 GMT-0700 (PDT)

hdate.getStartOfMonth("8-16-1987")
// Sat Aug 01 1987 00:00:00 GMT-0700 (PDT)

hdate.getStartOfMonth(1416283449392)
// Sat Nov 01 2014 00:00:00 GMT-0700 (PDT)
```
#### .getStartOfYear(jsdate or datestring)

##### Arguments: 

- __jsdate `object`__ which is a javascript Date (Eg. `new Date("8/16/1987")`)
- __datestring `string`__ that can be parsed as a date (Eg. `"8/16/1987"`) 
- __epochtime `integer`__ milliseconds from the epoch (Eg. `1416283449392`)

##### Returns:

- __`object`__ Native Date object set to the beginning of the given year

##### Examples:

```js
hdate.getStartOfYear(new Date("8-16-1987"))
// Thu Jan 01 1987 00:00:00 GMT-0800 (PST)

hdate.getStartOfYear("8-16-1987")
// Thu Jan 01 1987 00:00:00 GMT-0800 (PST)

hdate.getStartOfYear(1416283449392)
// Wed Jan 01 2014 00:00:00 GMT-0800 (PST)
```

#### .isLeapYear(jsdate or datestring)

##### Arguments: 

- __jsdate `object`__ which is a javascript Date (Eg. `new Date("8/16/1987")`)
- __datestring `string`__ that can be parsed as a date (Eg. `"8/16/1987"`) 
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
- Add time information to getHumanDate (August 16th, 2014 at 5:00pm PST)
- Support different locales.
- Proper testing framework.

### Contributing

__Forks and pull requests are most welcomed.__

Please add any methods to test.js and run npm test to make sure nothing has broken before submitting a pull request. 
