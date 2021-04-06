let YEAR = 2021;

const timer = () => {
    let now = new Date();
    var end = Date.parse(new Date(YEAR, 8, 8, 0, 0, 0, 0));
    console.log(end);
    console.log(now);


    const t = Math.abs(end - now);
    console.log( Math.abs(t) );
    const seconds = Math.floor((t/1000)%60);
    console.log("seconds", seconds);
    const minutes = Math.floor((t/1000 / 60) % 60);
    console.log("minutes", minutes);
    const hour = Math.floor((t/1000 / 60 / 60) % 24);
    console.log("hour", hour);
    const day = Math.floor((t/1000) / 60 / 60 / 24);
    console.log("day", day);
    const mounth = Math.floor((t/1000) / 60 / 60 / 24 / 12);
    console.log("mounth", mounth);

    var daysSpan = document.querySelector('.days');
    var hoursSpan = document.querySelector('.hours');
    var minutesSpan = document.querySelector('.minutes');
    var secondsSpan = document.querySelector('.seconds');
   
   
    daysSpan.innerHTML = day >= 10 ? day : "0"+day;
    hoursSpan.innerHTML = hour >= 10 ? hour : "0"+hour;
    minutesSpan.innerHTML = minutes >= 10 ? minutes : "0"+minutes;
    secondsSpan.innerHTML = seconds >= 10 ? seconds : "0"+seconds;
}

setInterval(timer, 1000);

// function getTimeRemaining(endtime) {
//     var t = Date.parse(endtime) - Date.parse(new Date());
//     var seconds = Math.floor((t / 1000) % 60);
//     var minutes = Math.floor((t / 1000 / 60) % 60);
//     var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
//     var days = Math.floor(t / (1000 * 60 * 60 * 24));
//     return {
//       'total': t,
//       'days': days,
//       'hours': hours,
//       'minutes': minutes,
//       'seconds': seconds
//     };
//   }
   
//   function initializeClock(id, endtime) {
//     var clock = document.getElementById(id);
//     var daysSpan = clock.querySelector('.days');
//     var hoursSpan = clock.querySelector('.hours');
//     var minutesSpan = clock.querySelector('.minutes');
//     var secondsSpan = clock.querySelector('.seconds');
   
//     function updateClock() {
//       var t = getTimeRemaining(endtime);
   
//       daysSpan.innerHTML = t.days;
//       hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
//       minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
//       secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
   
//       if (t.total <= 0) {
//         clearInterval(timeinterval);
//       }
//     }
   
//     updateClock();
//     var timeinterval = setInterval(updateClock, 1000);
//   }
   
// //   var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
// var deadline = new Date(2020, 11, 28, 0, 0, 0, 0);
// console.log(deadline);
// console.log(new Date());
// initializeClock('countdown', deadline);
