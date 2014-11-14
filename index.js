module.exports = {
  month: function month(index) {
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
  time: function time(input) {
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

    var times = {
      seconds: Math.floor((((seconds % 31536000) % 86400) % 3600) % 60),
      minutes:  Math.floor((((seconds % 31536000) % 86400) % 3600) / 60),
      hours: Math.floor(((seconds % 31536000) % 86400) / 3600),
      days: Math.floor((seconds % 31536000) / 86400),
      years: Math.floor(seconds / 31536000),
      suffix: suffix
    }

    var output = times.years ? times.years + " years " : ""
    output += times.days ? times.days + " days " : ""
    output += times.hours ? times.hours + " hours " : ""
    output += times.minutes ? times.minutes + " minutes " : ""
    output += times.seconds ? times.seconds.toFixed() + " seconds " : ""
    output += times.suffix

    return output
  },
  date: function date(input) {
    var input = new Date(input)
    var monthName = this.month(input.getMonth() + 1)
    var day = input.getDate()
    var humanDate

    if (day > 3 && day < 21) {
      humanDate = day + "th" 
    } else {
      switch (day % 10) {
        case 1:
          humanDate = day + "st"
          break;
        case 2:
          humanDate = day + "nd"
          break;
        case 3:
          humanDate = day + "rd"
          break;
        default:
          humanDate = day + "th"
          break;
      }  
    }
   
    var year = input.getFullYear()
    return monthName + " " + humanDate + ", " + year
  }
}

