# human-date

Making dates and times readable for humans. Forks and pull requests most welcomed.

### Usage

```shell
npm install human-date --save
```

```js
var hdate = require('human-date')

hdate.time(4)
// 4 seconds from now

hdate.time(-4)
// 4 seconds ago

hdate.time(new Date("8-16-1987"))
// 27 years 96 days 21 hours 47 minutes 2 seconds ago

hdate.date('8-16-1987')
// August 16th, 1987

hdate.month(8)
// August

hdate.month('8-16-1987')
// August

```

### API

#### .time(arg)

- __arg__ can be an integer representing seconds or a date string or object. Use negative number for in the past or postive for the future.

#### .date(arg)

- __arg__ can be a date string or object. 

#### .month(arg)

- __arg__ can be a number of the month (Note: not 0 indexed) or a date string or date.

### Todos

- Add various options.
- Support different locales.
- Proper testing framework.
