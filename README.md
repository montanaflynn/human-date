# human-date [![NPM Version](http://img.shields.io/npm/v/human-date.svg?style=flat-square)](https://www.npmjs.org/package/human-date) [![wercker continuous integration testing](http://img.shields.io/wercker/ci/546b83aba60c33c27c02add4.svg?style=flat-square)](https://app.wercker.com/project/bykey/2a16934d4add8e3fc3fb7ab83c7cc866) [![npm dependencies](http://img.shields.io/gemnasium/montanaflynn/human-date.svg?style=flat-square)](https://gemnasium.com/montanaflynn/human-date)

Making dates and times readable for humans. 

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
hdate.monthName(8)
// August

hdate.monthName("8-16-1987")
// August

hdate.monthName(new Date("8-16-1987"))
// August
```

### Todos

- Add various options and helpers (prefixes, suffixes, etc...)
- Add time information to prettyPrint (August 16th, 2014 at 5:00pm PST)
- Support different locales.

### Contributing

__Forks and pull requests are most welcomed.__

Please add any methods to test.js and run `npm test` before sending a pull request. 

### MIT license

Copyright (c) 2014, Montana Flynn (http://anonfunction.com/)
