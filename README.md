# human-date

Making dates and times readable for humans. Forks and pull requests most welcomed.

### Install

```shell
npm install human-date --save
```

### Usage

#### `hdate.date(arg)`

- __arg__ can be a date object or string that parses into a date object.

#### `hdate.time(arg)`

- __arg__ can be an integer representing seconds or a date string / object. Positive numbers represent the future and negative the past.

#### `hdate.month(arg)`

- __arg__ can be an integer representing the month or a date string / object. Month number is not 0 indexed, for instance 1 represents January.

### Example

```js
var hdate = require('human-date')

hdate.date('8-16-1987')
// August 16th, 1987

hdate.date(new Date('8-16-1987'))
// August 16th, 1987

hdate.time(4)
// 4 seconds from now

hdate.time(-4)
// 4 seconds ago

hdate.time("8-16-1987")
// 27 years 96 days 21 hours 47 minutes 2 seconds ago

hdate.time("8-16-2020")
// 5 years 277 days 1 hours 41 minutes 43 seconds from now

hdate.time(new Date("8-16-1987"))
// 27 years 96 days 21 hours 47 minutes 2 seconds ago

hdate.month(8)
// August

hdate.month("8-16-1987")
// August

hdate.month(new Date("8-16-1987"))
// August
```

### Todos

- Add various options.
- Support different locales.
- Proper testing framework.
