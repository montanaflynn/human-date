# human-date [![NPM Version](http://img.shields.io/npm/v/human-date.svg)](https://www.npmjs.org/package/human-date) [![wercker continuous integration testing](http://img.shields.io/wercker/ci/546b83aba60c33c27c02add4.svg)](https://app.wercker.com/project/bykey/2a16934d4add8e3fc3fb7ab83c7cc866)

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
// 125 days from now

hdate.monthName("8/16/2015")
// August
```

### Methods

#### .prettyPrint(datestring or jsdate or numseconds, [options])

##### Arguments:

- __datestring `string`__ that can be parsed as a date (Eg. `"8/16/1987"`)
- __jsdate `object`__ which is a javascript Date (Eg. `new Date("8/16/1987")`)
- __numseconds `integer`__ seconds to or from the current time (Eg. `-32`)
- __options__: object with the following keys
    - __showTime `boolean`__: default: `false`

##### Returns:

- __`string`__ representing the date. (Eg. `"August 16th, 1987"`)

##### Examples:

```js
hdate.prettyPrint('8-16-1987')
// August 16th, 1987

hdate.prettyPrint(new Date('8-16-1987'))
// August 16th, 1987

hdate.prettyPrint(-6400)
// November 17th, 2014 (at the time)

hdate.prettyPrint(new Date(1416448704578), { showTime: true })
// November 19th, 2014 at 5:58 pm
```

#### .relativeTime(datestring or jsdate or numseconds, [options])

##### Arguments:

- __datestring `string`__ that can be parsed as a date (Eg. `"8/16/1987"`)
- __jsdate `object`__ which is a javascript Date (Eg. `new Date("8/16/1987")`)
- __numseconds `integer`__ seconds to or from the current time (Eg. `-32`)
- __options__: object with the following keys
    - __futureSuffix `string`__ default: `"from now"`
    - __pastSuffix `string`__ default: `"from now"`
    - __presentText `string`__ default: `"now"`
    - __returnObject `boolean`__: default: `false`
    - __allUnits `boolean`__: default: `false`

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
// 27 years ago

hdate.relativeTime(new Date("8-16-1987"))
// 27 years ago

hdate.relativeTime(new Date("8-16-1987"), {returnObject: true})
// { seconds: 31, minutes: 5, hours: 4, days: 101, years: 27, past: true }

hdate.relativeTime(75, {allUnits: true})
// 1 minute, 15 seconds from now
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

#### .toUTC(datestring or jsdate or monthnum)

##### Arguments:

- __datestring `string`__ that can be parsed as a date (Eg. `"8/16/1987"`)
- __jsdate `object`__ which is a javascript Date (Eg. `new Date("8/16/1987")`)
- __epochtime `integer`__ time since epoch, in milliseconds (Eg. `1416451096261`)

##### Returns:

- __`object`__ native Date object modified to UTC timezone.

##### Examples:

```js
hdate.toUTC(1000000000000)
// '2001-09-09T08:46:40.000Z'

hdate.toUTC(1000000000000).getFullYear()
// 2001

hdate.toUTC("8-16-1987")
// Sun Aug 16 1987 07:00:00 GMT-0700 (PDT)

hdate.toUTC(new Date("8-16-1987"))
// Sun Aug 16 1987 07:00:00 GMT-0700 (PDT)

hdate.toUTC(new Date("8-16-1987")).toISOString()
// 1987-08-16T14:00:00.000Z
```

### Todos

- Add various options (prefixes, etc...)
- Support different locales.

### Contributing

__Forks and pull requests are most welcomed.__

Please add any methods to test.js and run `npm test` before sending a pull request.

### MIT license

Copyright (c) 2014-2016, Montana Flynn (http://anonfunction.com/)
