(function () {
  var humandate = {
    getHumanMonth: function getHumanMonth(index) {
      if (typeof index === 'number') {
        var monthNumber = index
      } else {
        var date = new Date(index)
        var monthNumber = date.getMonth() + 1
      }
      var months = []
      months.push("January")
      months.push("February")
      months.push("March")
      months.push("April")
      months.push("May")
      months.push("June")
      months.push("July")
      months.push("August")
      months.push("September")
      months.push("October")
      months.push("November")
      months.push("December")
      return months[monthNumber - 1]
    },
    getHumanTime: function getHumanTime(input) {
      if (typeof input === 'number') {
        var seconds = input
      } else {
        var date = new Date(input)
        var then = date.getTime()
        var now = new Date().getTime()
        var seconds = (now - then) / 1000 * -1
      }

      var suffix = seconds < 0 ? "ago" : "from now"
      seconds = Math.abs(seconds)

      var t = {
        seconds: Math.floor((((seconds % 31536000) % 86400) % 3600) % 60),
        minutes:  Math.floor((((seconds % 31536000) % 86400) % 3600) / 60),
        hours: Math.floor(((seconds % 31536000) % 86400) / 3600),
        days: Math.floor((seconds % 31536000) / 86400),
        years: Math.floor(seconds / 31536000),
        suffix: suffix
      }

      var o = []
      if (t.years) t.years > 1 ? o.push(t.years + " years") : o.push(t.years + " year")
      if (t.days) t.days > 1 ? o.push(t.days + " days") : o.push(t.days + " day")
      if (t.hours) t.hours > 1 ? o.push(t.hours + " hours") : o.push(t.hours + " hour")
      if (t.minutes) t.minutes > 1 ? o.push(t.minutes + " minutes") : o.push(t.minutes + " minute")
      if (t.seconds) t.seconds > 1 ? o.push(t.seconds + " seconds") : o.push(t.seconds + " second")
      return o.join(', ') + " " + t.suffix
    },
    getHumanDate: function getHumanDate(input) {
      var input = new Date(input)
      var monthName = this.getHumanMonth(input.getMonth() + 1)
      var day = input.getDate()
      var humanDate

      if (day > 3 && day < 21) {
        humanDate = day + "th" 
      } else {
        switch (day % 10) {
          case 1:
            humanDate = day + "st"
            break
          case 2:
            humanDate = day + "nd"
            break
          case 3:
            humanDate = day + "rd"
            break
          default:
            humanDate = day + "th"
            break
        }  
      }
     
      var year = input.getFullYear()
      return monthName + " " + humanDate + ", " + year
    },
    getStartOfDay: function getStartOfDay(input) {
      var date = new Date(input)
      date.setHours(0, 0, 0, 0)
      return date
    },
    getStartOfWeek: function getStartOfWeek(input) {
      var date = new Date(input)
      if (date.getDay()) {
        date.setHours(-Math.abs(date.getDay() - 1) * 24, 0, 0, 0)
      } else {
        date.setHours(-6 * 24, 0, 0, 0)
      }
      return date
    },
    getStartOfMonth: function getStartOfMonth(input) {
      var date = new Date(input)
      if (date.getDate()) {
        date.setHours(-Math.abs(date.getDate() - 1) * 24, 0, 0, 0)
      } else {
        date.setHours(0, 0, 0, 0)
      }
      return date
    },
    getStartOfYear: function getStartOfYear(input) {
      var date = new Date(input)
      date.setMonth(0, 1)
      date.setHours(0, 0, 0, 0)
      return date
    },
    getDayOfYear: function getDayOfYear(input) {
      var date = new Date(input)
      var dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
      var month = date.getMonth();
      var day = date.getDate();
      var dayOfYear = dayCount[month] + day;
      if(month > 1 && this.isLeapYear()) dayOfYear++;
      return dayOfYear;
    },
    isLeapYear: function isLeapYear(input) {
      var date = new Date(input)
      var year = date.getFullYear();
      if((year & 3) != 0) return false;
      return ((year % 100) != 0 || (year % 400) == 0);
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    return module.exports = humandate
  } else if (typeof define === 'function' && define.amd) {
    return define([], function() {
      return humandate
    })
  } else {
    this.humandate = humandate
  }
}())
