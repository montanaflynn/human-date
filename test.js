var hdate = require('./index.js')

function assert(msg, got, expected) {
  if (got === expected) {
    console.log(msg + "\033[32m - test passed \033[0m ")
  } else {
    console.log(msg + "\033[31m - test failed")
    console.log(got + " != " + expected + " \033[0m ")
  }
}

// Test time 
assert("testing time in future with number", hdate.relativeTime(122158874), "3 years, 318 days, 21 hours, 1 minute, 14 seconds from now")
assert("testing time in past with number", hdate.relativeTime(-122158874), "3 years, 318 days, 21 hours, 1 minute, 14 seconds ago")
assert("testing time in future with date string", typeof hdate.relativeTime("8-16-2020"), 'string')
assert("testing time in past with date string", typeof hdate.relativeTime("8-16-1987"), 'string')
assert("testing time in future with date object", typeof hdate.relativeTime(new Date("8-16-2020")), 'string')
assert("testing time in past with date object", typeof hdate.relativeTime(new Date("8-16-1987")), 'string')
assert("testing time with optional future suffix", hdate.relativeTime(4, {futureSuffix: "in the future"}), "4 seconds in the future")
assert("testing time with optional past suffix", hdate.relativeTime(-4, {pastSuffix: "in the past"}), "4 seconds in the past")
assert("testing time returning as object", typeof hdate.relativeTime(-4, {returnObject: true}), "object")

// Test date
assert("testing date in future with date string", hdate.prettyPrint("8-16-2020"), "August 16th, 2020")
assert("testing date in past with date string", hdate.prettyPrint("8-16-1987"), "August 16th, 1987")
assert("testing date in future with date object", hdate.prettyPrint(new Date("8-16-2020")), "August 16th, 2020")
assert("testing date in past with date object", hdate.prettyPrint(new Date("8-16-1987")), "August 16th, 1987")

// Test month
assert("testing human month with month number", hdate.monthName(8), "August")
assert("testing human month with date string", hdate.monthName("5-22-2012"), "May")
assert("testing human month with date object", hdate.monthName(new Date("7-22-2012")), 'July')

// Test start of methods
assert("testing get stat of day with date timestamp", hdate.startOfDay(1416283449392).toUTCString(), "Mon, 17 Nov 2014 08:00:00 GMT")
assert("testing get start of day with date object", hdate.startOfDay(new Date(1416283449392)).toUTCString(), "Mon, 17 Nov 2014 08:00:00 GMT")
assert("testing get start of week with date string", hdate.startOfWeek("8-16-1987").toUTCString(), "Mon, 10 Aug 1987 07:00:00 GMT")
assert("testing get start of week with date object", hdate.startOfWeek(new Date("8-16-1987")).toUTCString(), "Mon, 10 Aug 1987 07:00:00 GMT")
assert("testing get start of month with date string", hdate.startOfMonth("8-16-1987").toUTCString(), "Sat, 01 Aug 1987 07:00:00 GMT")
assert("testing get start of month with date object", hdate.startOfMonth(new Date("8-16-1987")).toUTCString(), "Sat, 01 Aug 1987 07:00:00 GMT")
assert("testing get start of year with date string", hdate.startOfYear("8-16-1987").toUTCString(), "Thu, 01 Jan 1987 08:00:00 GMT")
assert("testing get start of year with date object", hdate.startOfYear(new Date("8-16-1987")).toUTCString(), "Thu, 01 Jan 1987 08:00:00 GMT")

// Test leap year
assert("testing leap year is false from string", hdate.isLeapYear("8/16/1987"), false)
assert("testing leap year is false from date object", hdate.isLeapYear(new Date("8/16/1987")), false)
assert("testing leap year is true from string", hdate.isLeapYear("8/16/1988"), true)
assert("testing leap year is true from date object", hdate.isLeapYear(new Date("8/16/1988")), true)
