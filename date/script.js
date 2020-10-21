var d = new Date();
var str = "Сегодня " + day() + ", " + d.getDate() + " " + mounth();
var str2 = "Сейчас " + hour() + min() + sec();

alert(str);
alert(str2);

function day(){
    var d = new Date();
    var day = d.getDay();
    var arrDay = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    return arrDay[day];
}
function mounth() {
    var d = new Date();
    var mounth = d.getMonth();
    var arrMounth = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    return arrMounth[mounth];
}
function min(){
    var d = new Date();
    var min = d.getMinutes();
    if (min % 10 == 1){
        return min + " минута ";
    } else if (min % 10 >= 2 && min % 10 <= 4){
        return min + " минуты ";
    } else if (min % 10 >= 5 && min % 10 <= 9 || min % 10 == 0){
        return min + " минут ";
    }
}
function hour(){
    var d = new Date();
    var hour = d.getHours()
        if( hour%10 == 1){
            return hour + " час ";
        } else if (hour%10 >= 2 && hour % 10 <= 4){
            return hour + " часа ";
        } else if (hour % 10 >= 5 && hour % 10 <= 9 || hour % 10 == 0){
            return hour + " часов ";
        }
}

function sec(){
    var d = new Date();
    var sec = d.getSeconds();
    if( sec%10 == 1 && sec != 11){
        return  sec + " секунда ";
    } else if (sec%10 >= 2 && sec % 10 <= 4){
        return sec + " секунды ";
    } else if (sec % 10 >= 5 && sec % 10 <= 9 || sec % 10 == 0 || sec>=11 && sec<=14){
        return sec + " секунд ";
    }
    
}
let timeForConsole = hour() + min() + sec();
// let timerId = setInterval(() => console.log(timeForConsole, 1000);

// setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 5000);
// console.log(sec());
let timerId = setInterval(() => console.log(hour() + min() + sec()), 1000);
