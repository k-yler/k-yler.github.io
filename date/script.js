var d = new Date();

var str = "Сегодня " + day() + ", " + d.getDate() + " " + mounth();
var str2 = "Сейчас " + hour() + min();

alert(str);
alert(str2);

function day(){
    var day = d.getDay();
    var arrDay = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    return arrDay[day];
}
function mounth() {
    var mounth = d.getMonth();
    var arrMounth = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    return arrMounth[mounth];
}
function min(){
    var min = d.getMinutes();
    if (min % 10 == 1){
        return min + " минута";
    } else if (min % 10 >= 2 && min % 10 <= 4){
        return min + " минуты";
    } else if (min % 10 >= 5 && min % 10 <= 9 || min % 10 == 0){
        return min + " минут";
    }
}
function hour(){
    var hour = d.getHours()
        if( hour%10 == 1){
            return hour + " час ";
        } else if (hour%10 >= 2 && hour % 10 <= 4){
            return hour + " часа ";
        } else if (min % 10 >= 5 && min % 10 <= 9 || min % 10 == 0){
            return hour + " часов ";
        }
}
