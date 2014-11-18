# human-date

Making dates and times readable for humans. Plus a bunch of other goodies.

### Quick Start

```shell
# Install and save dependency in package.json
npm install human-date --save
```

```js
// Include as a short name for ease-of-use
var hdate = require('human-date')
```

### Methods

#### .getHumanDate(jsdate or datestring)

__arguments__: 

- __jsdate__: a javascript date object (example: `new Date("8/16/1987")`)
- __datestring__: anything that can be parsed as a date (example: `"8/16/1987"`)

__returns__: 

- __string__: representing the date. (example: `"August 16th, 1987"`)

__examples__:

```js
hdate.getHumanDate(new Date('8-16-1987'))
// August 16th, 1987

hdate.getHumanDate('8-16-1987')
// August 16th, 1987
```

#### .getHumanTime(jsdate or datestring or numseconds, [object])

__arguments__: 

- __jsdate__: (`object`) a javascript date object (example: `new Date("8/16/1987")`)
- __datestring__: (`string`) anything that can be parsed as a date (example: `"8/16/1987"`) or
- __numseconds__: (`integer`) number of seconds to or from the current time (example: `-32`)
- __object__: options object with the following keys
    - __futureSuffix__: (`string`) default: `"from now"`
    - __pastSuffix__: (`string`) default: `"from now"`
    - __returnObject__: (`boolean`) default: `false`

__returns__: 

Depending on the option `returnObject` a:

- __string__: `"August 16th, 1987"` (Default)
- __object__: `{ seconds: 31, minutes: 5, hours: 4, days: 101, years: 27, past: true }`

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
- __datestring__: (`string`) anything that can be parsed as a date (example: `"8/16/1987"`) or
- __monthnum__: (`integer`) the month number, not 0-indexed (example: `12`)

__returns__: 

- __string__: `"December"`

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
- __datestring__: (`string`) anything that can be parsed as a date (example: `"8/16/1987"`) or

__returns__: 

- __object__: Native Date object set to the beginning of the given day

__examples__:

```js
hdate.getStartOfDay(1416283449392)
// Mon Nov 17 2014 00:00:00 GMT-0800 (PST)
```

#### .getStartOfWeek(jsdate or datestring)

__arguments__: 

- __jsdate__: (`object`) a javascript date object (example: `new Date("8/16/1987")`)
- __datestring__: (`string`) anything that can be parsed as a date (example: `"8/16/1987"`) or

__returns__: 

- __object__: Native Date object set to the beginning of the given week

__examples__:

```js
hdate.getStartOfWeek("8-16-1987")
// Mon Aug 10 1987 00:00:00 GMT-0700 (PDT)
```

#### .getStartOfMonth(jsdate or datestring)

__arguments__: 

- __jsdate__: (`object`) a javascript date object (example: `new Date("8/16/1987")`)
- __datestring__: (`string`) anything that can be parsed as a date (example: `"8/16/1987"`) or

__returns__: 

- __object__: Native Date object set to the beginning of the given month

__examples__:

```js
hdate.getStartOfMonth("8-16-1987")
// Sat Aug 01 1987 00:00:00 GMT-0700 (PDT)
```

#### .getStartOfYear(jsdate or datestring)

__arguments__: 

- __jsdate__: (`object`) a javascript date object (example: `new Date("8/16/1987")`)
- __datestring__: (`string`) anything that can be parsed as a date (example: `"8/16/1987"`) or

__returns__: 

- __object__: Native Date object set to the beginning of the given year

__examples__:

```js
hdate.getStartOfYear("8-16-1987")
// Thu Jan 01 1987 00:00:00 GMT-0800 (PST)
```

`.isLeapYear(arg)`

- __arg__ date | date string

#### .isLeapYear(jsdate or datestring)

__arguments__: 

- __jsdate__: (`object`) a javascript date object (example: `new Date("8/16/1987")`)
- __datestring__: (`string`) anything that can be parsed as a date (example: `"8/16/1987"`) or

__returns__: 

- __boolean__: wether or not the given date is in a leap year

__examples__:

```js
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
