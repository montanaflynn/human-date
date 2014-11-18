(function () {
  var humandate = {
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ],
    monthName: function monthName(index) {
      var monthNumber, date;
      if (typeof index === 'number') {
        monthNumber = index;
      } else {
        date = new Date(index);
        monthNumber = date.getMonth() + 1;
      }
      return humandate.months[monthNumber - 1];
    },
    relativeTime: function relativeTime(input, options) {
      var seconds, time, suffix, then, date, now;
      var output = [];
      function append(amount, string) {
        output.push(amount + ' ' + string + (amount > 1 ? 's' : ''));
      }
      if (typeof input === 'number') {
        seconds = input;
      } else {
        date = new Date(input);
        then = date.getTime();
        now = new Date().getTime();
        seconds = (now - then) / 1000 * -1;
      }
      if (!options)
        options = {};
      if (!options.futureSuffix)
        options.futureSuffix = 'from now';
      if (!options.pastSuffix)
        options.pastSuffix = 'ago';
      if (!options.returnObject)
        options.returnObject = false;
      var isPast = seconds < 0 ? true : false;
      seconds = Math.abs(seconds);
      time = {
        seconds: Math.floor(seconds % 31536000 % 86400 % 3600 % 60),
        minutes: Math.floor(seconds % 31536000 % 86400 % 3600 / 60),
        hours: Math.floor(seconds % 31536000 % 86400 / 3600),
        days: Math.floor(seconds % 31536000 / 86400),
        years: Math.floor(seconds / 31536000),
        past: isPast
      };
      if (options.returnObject)
        return time;
      var strSuffix = time.past ? options.pastSuffix : options.futureSuffix;
      if (time.years)
        append(time.years, 'year');
      if (time.days)
        append(time.days, 'day');
      if (time.hours)
        append(time.hours, 'hour');
      if (time.minutes)
        append(time.minutes, 'minute');
      if (time.seconds)
        append(time.seconds, 'second');
      return output.join(', ') + ' ' + strSuffix;
    },
    prettyPrint: function prettyPrint(input) {
      if (!input) {
        input = new Date();
      } else if (typeof input === 'number') {
        input = new Date().setSeconds(input);
      }
      var date = new Date(input);
      var monthName = this.monthName(date.getMonth() + 1);
      var day = date.getDate();
      var humanDate;
      if (day > 3 && day < 21) {
        humanDate = day + 'th';
      } else if (day % 10 === 1) {
        humanDate = day + 'st';
      } else if (day % 10 === 2) {
        humanDate = day + 'nd';
      } else if (day % 10 === 3) {
        humanDate = day + 'rd';
      } else {
        humanDate = day + 'th';
      }
      var year = date.getFullYear();
      return monthName + ' ' + humanDate + ', ' + year;
    }
  };
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = humandate;
  } else if (typeof define === 'function' && define.amd) {
    return define([], function () {
      return humandate;
    });
  } else {
    this.humandate = humandate;
  }
}());