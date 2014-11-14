# human-date

Making dates and times readable for humans. Forks and pull requests most welcomed.

### Install

```shell
npm install human-date --save
```

### API

#### .date(arg)

- __arg__ a date object or string that parses into a date object.

_Examples:_

```js
hdate.date('8-16-1987')
// August 16th, 1987

hdate.date(new Date('8-16-1987'))
// August 16th, 1987
```

#### .time(arg)

- __arg__ an integer representing seconds or a date string / object. 

_Notes:_

Positive numbers represent the future and negative the past.

_Examples:_

```js
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
```

#### .month(arg)

- __arg__ an integer representing the month or a date string / object.

_Notes:_

Month number is not 0 indexed. 1 Represents January and 12 December.

_Examples:_

```js
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
