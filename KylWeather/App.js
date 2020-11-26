const APIKEY = '8c6382a4c537bb614eb1ac5d1a8bea31';
let load = document.querySelector(".loading");
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
}

const startApp = (lat, long) =>{
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${APIKEY}`;
    getData(url);
}

button.addEventListener("click", changeCountry);
function changeCountry() {
    const input = document.querySelector("input");
    if(input.value){
        console.log(111);
        console.log(input.value);
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${input.value.trim()}&appid=${APIKEY}`;
        input.value = "";
        getData(url);    
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
            console.log(data);
            // console.log(createWeather(data));
            renderMainCard(createWeather(data));
        }
    });
}

const createWeather = data => {
    const sunriseD = new Date(data.city.sunrise * 1000);
    const sunsetD = new Date(data.city.sunset * 1000);
    return {
        sunrise: `${sunriseD.getHours()<10 ? "0" + sunriseD.getHours() : sunriseD.getHours()}:${sunriseD.getMinutes()<10 ? "0" + sunriseD.getMinutes() : sunriseD.getMinutes()}`,
        sunset: `${sunsetD.getHours()<10 ? "0" + sunsetD.getHours() : sunsetD.getHours()}:${sunsetD.getMinutes()<10 ? "0" + sunsetD.getMinutes() : sunsetD.getMinutes()}`,
        name: data.city.name,
        country: data.city.country,
        pressure: (data.list[0].main.pressure / 1.3333).toFixed(),
        feelsTemp: data.list[0].main.feels_like.toFixed()-273,
        temp: data.list[0].main.temp.toFixed()-273,
        description: data.list[0].weather[0].description,
        icon: ICONS[data.list[0].weather[0].icon],
        wind: data.list[0].wind.speed + "m/s"
    }
}

const renderMainCard = weather => {
    // console.log(weather);
    const city = document.querySelector(".city");
    const degree = document.querySelector(".сelsius");
    const description = document.querySelector(".description");
    const feelsLike = document.querySelector(".feels-like");
    const sunrise = document.querySelector(".sunrise");
    const pressure = document.querySelector(".pressure");
    const wind = document.querySelector(".wind");
    const sunset = document.querySelector(".sunset");
    // console.log(degree);
    city.innerHTML = `${weather.country}, ${weather.name}`;
    degree.innerHTML = weather.temp;
    description.innerHTML = weather.description;
    feelsLike.innerHTML = weather.feelsTemp;
    wind.innerHTML = weather.wind;
    sunrise.innerHTML = weather.sunrise;
    sunset.innerHTML = weather.sunset;
    pressure.innerHTML = weather.pressure;
    // console.log(weather.icon, " icon");

    var skycons = new Skycons({"color": "white"});
    skycons.add("icon1", weather.icon);
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
