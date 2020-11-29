const APIKEY = '8c6382a4c537bb614eb1ac5d1a8bea31';
let load = document.querySelector(".loading");
const warning = document.querySelector(".warning");
const button = document.querySelector(".get");
const ICONS = {
    '01d': Skycons.CLEAR_DAY, '01n': Skycons.CLEAR_NIGHT, '02d': Skycons.PARTLY_CLOUD_DAY, '02n': Skycons.PARTLY_CLOUD_NIGHT, '03d': Skycons.CLOUDY, '03n': Skycons.CLOUDY, '04d': Skycons.CLOUDY, '04n': Skycons.CLOUDY, '09d': Skycons.SLEET, '09n': Skycons.SLEET, '10d': Skycons.RAIN, '10n': Skycons.RAIN, "11d":Skycons.RAIN,"11n": Skycons.RAIN, "13n": Skycons.SNOW, "13d": Skycons.SNOW, "50n": Skycons.FOG, "50d": Skycons.FOG
};
const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday', "Saturday"];
const mouth = ['Jun', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];


// const otherDays =[]

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
}

function success(position) {
    const lat  = position.coords.latitude;
    const long = position.coords.longitude;
    startApp(lat, long);
}

function error() {
    console.log('Unable to retrieve your location');
    showNotFound();
}

const startApp = (lat, long) =>{
    // const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${APIKEY}`;
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly&appid=${APIKEY}`;
    getData(url);
}

button.addEventListener("click", changeCountry);
async function changeCountry() {
    const input = document.querySelector("input");
    if(input.value){
        console.log(111);
        console.log(input.value);
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${input.value.trim()}&appid=${APIKEY}`;
        input.value = "";
        let lat;
        let long;
        await fetch(url).then(r=>r.json()).then(data=>{
            console.log(data);
            if(data.cod == 404){
                console.log(222222);
                alert("I could't find this city")
            } else {
                console.log(data.city.coord);
                lat = data.city.coord.lat;
                long = data.city.coord.lon;
                let tempUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly&appid=${APIKEY}`;
                getData(tempUrl);  
            }
        })   
    }
}
document.addEventListener("keydown", function (e){
    if (e.keyCode === 13) changeCountry();
})

const getData = url => {
    loadPlay();
    fetch(url).then((response) => response.json()).then(data => {
        // console.log(data);
        if(data.cod == 404){
            console.log("I couldn't find this city");
        } else {
            // console.log("done");
            // console.log(data);
            createWeather(data).then(q=>{
                console.log(q);
                console.log(data.daily);
                renderMainCard(q)
            });
            // createWeather(data).then(q=>console.log(q));
            // renderMainCard(createWeather(data));
        }
    });
}

async function createWeather(data) {
    let sunriseD = new Date(data.current.sunrise*1000)
    // let tmp;
    const sunsetD = new Date(data.current.sunset * 1000);
    // console.log(sunriseD);
    const latitude = data.lat;
    const longitude = data.lon;
    let nameCity;
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${APIKEY}`;

    // console.log(sunriseD);
    await fetch(url).then(r=>r.json()).then(q=>{
        nameCity = `${q.city.country}, ${q.city.name}`
        // console.log(q.city.sunrise);
        // tmp = q.city.sunrise * 1000;
        // sunriseD = new Date(q.city.sunrise * 1000);
    });
    // console.log(tmp);
    // let sunriseD = new Date(tmp);
    // console.log(sunriseD);
    console.log(data);
    const weather = {
        sunrise: `${sunriseD.getHours()<10 ? "0" + sunriseD.getHours() : sunriseD.getHours()}:${sunriseD.getMinutes()<10 ? "0" + sunriseD.getMinutes() : sunriseD.getMinutes()}`,
        sunset: `${sunsetD.getHours()<10 ? "0" + sunsetD.getHours() : sunsetD.getHours()}:${sunsetD.getMinutes()<10 ? "0" + sunsetD.getMinutes() : sunsetD.getMinutes()}`,
        lat: latitude,
        long: longitude,
        name: nameCity,
        pressure: (data.current.pressure/1.3333).toFixed(),
        feelsTemp: data.current.feels_like.toFixed()-273,
        temp: data.current.temp.toFixed()-273,
        description: data.current.weather[0].description,
        icon: ICONS[data.current.weather[0].icon],
        wind: data.current.wind_speed + "m/s",
        daily: []
    }
    // console.log(data.daily[6]);
    for( let i = 1; i < 6; i++) {
        console.log(data.daily[i].weather[0].icon);
        weather.daily.push({
            dt: data.daily[i].dt,
            temp: data.daily[i].temp.day.toFixed()-273,
            icon: ICONS[data.daily[i].weather[0].icon]
        })
    }


    return weather;
        // sunrise: `${sunriseD.getHours()<10 ? "0" + sunriseD.getHours() : sunriseD.getHours()}:${sunriseD.getMinutes()<10 ? "0" + sunriseD.getMinutes() : sunriseD.getMinutes()}`,
        // sunset: `${sunsetD.getHours()<10 ? "0" + sunsetD.getHours() : sunsetD.getHours()}:${sunsetD.getMinutes()<10 ? "0" + sunsetD.getMinutes() : sunsetD.getMinutes()}`,
        // lat: latitude,
        // long: longitude,
        // name: nameCity,
        // pressure: (data.current.pressure/1.3333).toFixed(),
        // feelsTemp: data.current.feels_like.toFixed()-273,
        // temp: data.current.temp.toFixed()-273,
        // description: data.current.weather[0].description,
        // icon: ICONS[data.current.weather[0].icon],
        // wind: data.current.wind_speed + "m/s"
    
}

const renderMainCard = weather => {
    // console.log(weather);
    // console.log(weather.daily[1].icon);
    const city = document.querySelector(".city");
    const degree = document.querySelector(".сelsius");
    const description = document.querySelector(".description");
    const feelsLike = document.querySelector(".feels-like");
    const sunrise = document.querySelector(".sunrise");
    const pressure = document.querySelector(".pressure");
    const wind = document.querySelector(".wind");
    const sunset = document.querySelector(".sunset");
    const daily = document.querySelector(".card-weather-other");
    // console.log(degree);
    city.innerHTML = weather.name;
    degree.innerHTML = weather.temp;
    description.innerHTML = weather.description;
    feelsLike.innerHTML = weather.feelsTemp;
    wind.innerHTML = weather.wind;
    sunrise.innerHTML = weather.sunrise;
    sunset.innerHTML = weather.sunset;
    pressure.innerHTML = weather.pressure;

    daily.innerHTML = "";
    for(let i = 0; i<weather.daily.length; i++){
        let day = new Date(weather.daily[i].dt*1000)        
        daily.innerHTML += `<div class="card-day">
        <div class="card-day-text">
            <p class="date">${mouth[day.getMonth()]} ${day.getDate()} </p>
            <p class="week-day">${dayOfWeek[day.getDay()]}</p>
        </div>
        <div class="card-day-img"><canvas id="icon${i}" width="50" height="50"></canvas></div>
        <div class="card-day-celsius"><span class="day-celsius">${weather.daily[i].temp}</span>&deg;</div>
    </div>`;
    }

    var skycons = new Skycons({"color": "white"});
    skycons.add("icon", weather.icon);
    skycons.play();
    skycons = new Skycons({"color": "rgb(24, 161, 218)"})
    for(let k = 0; k < weather.daily.length; k++){
        skycons.add(`icon${k}`, weather.daily[k].icon);
    }
    // console.log(tmp);
    skycons.play();
    loadStop();
}

const loadPlay = () =>{
    load.style.display = "block";
}
const loadStop = () => {
    load.style.display = "none";
}
const showNotFound = () => {
    warning.style.display = "block";
}
const closeNotFound = () => {
    warning.style.display = "none";
}