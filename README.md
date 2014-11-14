# human-date

Making dates and times readable for humans. Forks and pull requests most welcomed.

### Usage

```shell
npm install human-date --save
```

```js
var hdate = require('human-date')
```

#### hdate.date(arg)

- `arg` can be a date object or string that parses into a date object.

#### hdate.time(arg)

- `arg` can be an integer representing seconds or a date string / object. 

__Note:__ Positive numbers represent the future and negative the past.

#### hdate.month(arg)

- `arg` can be an integer representing the month or a date string / object.

__Note:__ Month number does not start at 0. For instance 1 Represents January.

### Examples

```js
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
