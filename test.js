var hdate = require('./humandate.js')
var assert = require("assert")

describe('relativeTime', function(){
  describe('future', function(){
    it('should work with an integer', function(){
      assert.equal(hdate.relativeTime(122158874), "3 years, 318 days, 21 hours, 1 minute, 14 seconds from now")
    })
    it('should work with a string', function(){
      assert.equal(typeof hdate.relativeTime("8-16-2020"), 'string')
    })
    it('should work with a date object', function(){
      assert.equal(typeof hdate.relativeTime(new Date("8-16-2020")), 'string')
    })
  })
  describe('past', function(){
    it('should work with an integer', function(){
      assert.equal(hdate.relativeTime(-122158874), "3 years, 318 days, 21 hours, 1 minute, 14 seconds ago")
    })
    it('should work with a string', function(){
      assert.equal(typeof hdate.relativeTime("8-16-1987"), "string")
    })
    it('should work with a date object', function(){
      assert.equal(typeof hdate.relativeTime(new Date("8-16-1987")), "string")
    })
  })
  describe('options', function(){
    it('should work with an optional future suffix', function(){
      assert.equal(hdate.relativeTime(4, {futureSuffix: "in the future"}), "4 seconds in the future")
    })
    it('should work with an optional past suffix', function(){
      assert.equal(hdate.relativeTime(-4, {pastSuffix: "in the past"}), "4 seconds in the past")
    })
    it('should work returning an object', function(){
      assert.equal(typeof hdate.relativeTime(-4, {returnObject: true}), "object")
    })
  })
})

describe('prettyPrint', function(){
  describe('future', function(){
    it('should work with a string', function(){
      assert.equal(hdate.prettyPrint("8-16-2020"), "August 16th, 2020")
    })
    it('should work with a date object', function(){
      assert.equal(hdate.prettyPrint(new Date("8-16-2020")), "August 16th, 2020")
    })
  })
  describe('past', function(){
    it('should work with a string', function(){
      assert.equal(hdate.prettyPrint("8-16-1987"), "August 16th, 1987")
    })
    it('should work with a date object', function(){
      assert.equal(hdate.prettyPrint(new Date("8-16-1987")), "August 16th, 1987")
    })
  })
})

describe('monthName', function(){
  it('should work with an integer', function(){
    assert.equal(hdate.monthName(8), "August")
  })
  it('should work with a string', function(){
    assert.equal(hdate.monthName("5-22-2012"), "May")
  })
  it('should work with a date object', function(){
    assert.equal(hdate.monthName(new Date("7-4-2012")), "July")
  })
})

describe('startOf', function(){
  describe('day', function(){
    it('should work with a string', function(){
      assert.equal(hdate.startOfDay("8/16/1987 07:59:25").toUTCString(), "Sun, 16 Aug 1987 00:00:00 GMT")
    })
    it('should work with a date object', function(){
      assert.equal(hdate.startOfDay(new Date(1416283449392)).toUTCString(), "Mon, 17 Nov 2014 00:00:00 GMT")
    })
    it('should work with an integer', function(){
      assert.equal(hdate.startOfDay(1416283449392).toUTCString(), "Mon, 17 Nov 2014 00:00:00 GMT")
    })
  })
  describe('week', function(){
    it('should work with a string', function(){
      assert.equal(hdate.startOfWeek("8/16/1987 07:59:25").toUTCString(), "Mon, 10 Aug 1987 00:00:00 GMT")
    })
    it('should work with a date object', function(){
      assert.equal(hdate.startOfWeek(new Date(1416283449392)).toUTCString(), "Mon, 17 Nov 2014 00:00:00 GMT")
    })
    it('should work with an integer', function(){
      assert.equal(hdate.startOfWeek(1416283449392).toUTCString(), "Mon, 17 Nov 2014 00:00:00 GMT")
    })
  })
  describe('month', function(){
    it('should work with a string', function(){
      assert.equal(hdate.startOfMonth("8/16/1987 07:59:25").toUTCString(), "Sat, 01 Aug 1987 00:00:00 GMT")
    })
    it('should work with a date object', function(){
      assert.equal(hdate.startOfMonth(new Date(1416283449392)).toUTCString(), "Sat, 01 Nov 2014 00:00:00 GMT")
    })
    it('should work with an integer', function(){
      assert.equal(hdate.startOfMonth(1416283449392).toUTCString(), "Sat, 01 Nov 2014 00:00:00 GMT")
    })
  })
  describe('year', function(){
    it('should work with a string', function(){
      assert.equal(hdate.startOfYear("8/16/1987 07:59:25").toUTCString(), "Thu, 01 Jan 1987 00:00:00 GMT")
    })
    it('should work with a date object', function(){
      assert.equal(hdate.startOfYear(new Date(1416283449392)).toUTCString(), "Wed, 01 Jan 2014 00:00:00 GMT")
    })
    it('should work with an integer', function(){
      assert.equal(hdate.startOfYear(1416283449392).toUTCString(), "Wed, 01 Jan 2014 00:00:00 GMT")
    })
  })
})

describe('dayOfYear', function(){
  it('should work with a string', function(){
    assert.equal(hdate.dayOfYear("1/1/1987"), 1)
  })
  it('should work with a date object', function(){
    assert.equal(hdate.dayOfYear(new Date("8/16/1987")), 229)
  })
  it('should work with an integer', function(){
    assert.equal(hdate.dayOfYear(1416283449392), 322)
  })
})

describe('isLeapYear', function(){
  describe('true', function(){
    it('should work with a string', function(){
      assert.equal(hdate.isLeapYear("8/16/1987"), false)
    })
    it('should work with a date object', function(){
      assert.equal(hdate.isLeapYear(new Date("8/16/1987")), false)
    })
    it('should work with an integer', function(){
      assert.equal(hdate.isLeapYear(1416326995059), false)
    })
  })
  describe('false', function(){
    it('should work with a string', function(){
      assert.equal(hdate.isLeapYear("8/16/1988"), true)
    })
    it('should work with a date object', function(){
      assert.equal(hdate.isLeapYear(new Date("8/16/1988")), true)
    })
    it('should work with an integer', function(){
      assert.equal(hdate.isLeapYear(587718123456), true)
    })
  })
})
