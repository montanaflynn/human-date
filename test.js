var hdate = require('./humandate.js')
var assert = require('assert')

describe('relativeTime', function () {
  describe('future', function () {
    it('should work with an integer', function () {
      assert.equal(hdate.relativeTime(122158874), '3 years from now')
    })
    it('should work with an very small integer', function () {
      assert.equal(hdate.relativeTime(5), '5 seconds from now')
    })
    it('should work with a string', function () {
      assert.equal(typeof hdate.relativeTime('8-16-2020'), 'string')
    })
    it('should work with a date object', function () {
      assert.equal(typeof hdate.relativeTime(new Date('8-16-2020')), 'string')
    })
  })
  describe('past', function () {
    it('should work with an integer', function () {
      assert.equal(hdate.relativeTime(-122158874), '3 years ago')
    })
    it('should work with a string', function () {
      assert.equal(typeof hdate.relativeTime('8-16-1987'), 'string')
    })
    it('should work with a date object', function () {
      assert.equal(typeof hdate.relativeTime(new Date('8-16-1987')), 'string')
    })
  })
  describe('present', function () {
    it('should work with an integer', function () {
      assert.equal(hdate.relativeTime(0), 'now')
    })
    it('should work with a date object', function () {
      assert.equal(hdate.relativeTime(new Date()), 'now')
    })
  })
  describe('options', function () {
    it('should work with an optional future suffix', function () {
      assert.equal(hdate.relativeTime(4, { futureSuffix: 'in the future' }), '4 seconds in the future')
    })
    it('should work with an optional past suffix', function () {
      assert.equal(hdate.relativeTime(-4, { pastSuffix: 'in the past' }), '4 seconds in the past')
    })
    it('should work with an optional present text', function () {
      assert.equal(hdate.relativeTime(0, { presentText: 'a moment ago' }), 'a moment ago')
    })
    it('should work returning an object', function () {
      assert.equal(typeof hdate.relativeTime(-4, { returnObject: true }), 'object')
    })
    it('should work with all units option', function () {
      assert.equal(hdate.relativeTime(75, { allUnits: true }), '1 minute, 15 seconds from now')
    })
  })
})

describe('prettyPrint', function () {
  describe('future', function () {
    it('should work with no input', function () {
      assert.equal(typeof hdate.prettyPrint(), 'string')
    })
    it('should work with a number', function () {
      assert.equal(typeof hdate.prettyPrint(7862), 'string')
    })
    it('should work with a string', function () {
      assert.equal(hdate.prettyPrint('8-16-2020'), 'August 16th, 2020')
    })
    it('should work with a date object', function () {
      assert.equal(hdate.prettyPrint(new Date('8-16-2020')), 'August 16th, 2020')
    })
  })
  describe('past', function () {
    it('should work with a string', function () {
      assert.equal(hdate.prettyPrint('8-16-1987'), 'August 16th, 1987')
    })
    it('should work with a date object', function () {
      assert.equal(hdate.prettyPrint(new Date('8-16-1987')), 'August 16th, 1987')
    })
  })
  describe('options', function () {
    it('should work when showing time', function () {
      var timestamp = hdate.toUTC(new Date(1416448704578))
      assert.equal(hdate.prettyPrint(timestamp, { showTime: true }), 'November 20th, 2014 at 1:58 am')
    })
  })
  describe('suffixes', function () {
    it('should work with st', function () {
      assert.equal(hdate.prettyPrint(new Date('8-1-1987')), 'August 1st, 1987')
    })
    it('should work with nd', function () {
      assert.equal(hdate.prettyPrint(new Date('8-2-1987')), 'August 2nd, 1987')
    })
    it('should work with rd', function () {
      assert.equal(hdate.prettyPrint(new Date('8-3-1987')), 'August 3rd, 1987')
    })
    it('should work with th', function () {
      assert.equal(hdate.prettyPrint(new Date('8-30-1987')), 'August 30th, 1987')
    })
  })
})

describe('monthName', function () {
  it('should work with an integer', function () {
    assert.equal(hdate.monthName(8), 'August')
  })
  it('should work with a string', function () {
    assert.equal(hdate.monthName('5-22-2012'), 'May')
  })
  it('should work with a date object', function () {
    assert.equal(hdate.monthName(new Date('7-4-2012')), 'July')
  })
})

describe('toUTC', function () {
  it('should work with nothing', function () {
    assert.equal(Object.prototype.toString.call(hdate.toUTC()), '[object Date]')
  })
  it('should work with a string', function () {
    assert.equal(Object.prototype.toString.call(hdate.toUTC('5-22-2012')), '[object Date]')
  })
  it('should work with a date object', function () {
    assert.equal(Object.prototype.toString.call(hdate.toUTC(new Date('7-4-2012'))), '[object Date]')
  })
  it('should work with a timestamp', function () {
    assert.equal(Object.prototype.toString.call(hdate.toUTC(1000000000000)), '[object Date]')
  })
})

describe('monthName', function () {
  it('should work with an integer', function () {
    assert.equal(hdate.monthName(8), 'August')
  })
  it('should work with a string', function () {
    assert.equal(hdate.monthName('5-22-2012'), 'May')
  })
  it('should work with a date object', function () {
    assert.equal(hdate.monthName(new Date('7-4-2012')), 'July')
  })
})

describe('validDate', function () {
  it('should work with an integer', function () {
    assert.equal(hdate.monthName(8), 'August')
  })
  it('should work with a string', function () {
    assert.equal(hdate.monthName('5-22-2012'), 'May')
  })
  it('should work with a date object', function () {
    assert.equal(hdate.monthName(new Date('7-4-2012')), 'July')
  })
})
