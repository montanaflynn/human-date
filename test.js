var hdate = require('./index.js')

// Test time 
assert("testing time in future with number", hdate.time(4) === "4 seconds from now")

assert("testing time in past with number", hdate.time(-4) === "4 seconds ago")

assert("testing time in future with date string", typeof hdate.time("8-16-2020") === 'string')

assert("testing time in past with date string", typeof hdate.time("8-16-1987") === 'string')

assert("testing time in future with date object", typeof hdate.time(new Date("8-16-2020")) === 'string')

assert("testing time in past with date object", typeof hdate.time(new Date("8-16-1987")) === 'string')

// Test date
assert("testing date in future with date string", hdate.date("8-16-2020") === "August 16th, 2020")

assert("testing date in past with date string", hdate.date("8-16-1987") === "August 16th, 1987")

assert("testing date in future with date object", hdate.date(new Date("8-16-2020")) === "August 16th, 2020")

assert("testing date in past with date object", hdate.date(new Date("8-16-1987")) === "August 16th, 1987")

// Test month
assert("testing human month with month number", hdate.month(8) === "August")

assert("testing human month with date string", hdate.month("5-22-2012") === "May")

assert("testing human month with date object", hdate.month(new Date("7-22-2012")) === 'July')

function assert(msg, expr) {
	if (expr) {
		console.log(msg + "\033[32m - test passed \033[0m ")
	} else {
		console.log(msg + "\033[31m - test failed \033[0m ")
	}
}
