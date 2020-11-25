const APIKEY = '8c6382a4c537bb614eb1ac5d1a8bea31';
let load = document.querySelector(".loading");

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
        sunrise: `${sunriseD.getHours()<10 ? "0" + sunriseD.getHours() : sunriseD.getHours()}:${sunriseD.getMinutes()}`,
        sunset: `${sunsetD.getHours()<10 ? "0" + sunsetD.getHours() : sunsetD.getHours()}:${sunsetD.getMinutes()}`,
        name: data.city.name,
        country: data.city.country,
        pressure: data.list[0].main.pressure,
        feelsTemp: data.list[0].main.feels_like.toFixed()-273,
        temp: data.list[0].main.temp.toFixed()-273,
        description: data.list[0].weather[0].description,
        icon: getChangedIcon(data.list[0].weather[0].icon),
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
    city.innerHTML = weather.name;
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

const getChangedIcon = icon => {
    console.log(icon);
    if(icon == "01d") return Skycons.Skycnos.CLEAR_DAY;
    if(icon == "01n") return Skycons.Skycnos.CLEAR_NIGHT;
    if(icon == "02d") return Skycons.PARTLY_CLOUD_DAY;
    if(icon == "02n") return Skycons.PARTLY_CLOUD_NIGHT;
    if(icon == "03d") return Skycons.CLOUDY;
    if(icon == "03n") return Skycons.CLOUDY;
    if(icon == "04d") return Skycons.CLOUDY;
    if(icon == "04n") return Skycons.CLOUDY;
    if(icon == "09d") return Skycons.SLEET;
    if(icon == "09n") return Skycons.SLEET;
    if(icon == "10d") return Skycons.RAIN;
    if(icon == "10n") return Skycons.RAIN;
    if(icon == "11d") return Skycnos.RAIN;
    if(icon == "11n") return Skycnos.RAIN;
    if(icon == "13n") return Skycnos.SNOW;
    if(icon == "13d") return Skycnos.SNOW;
    if(icon == "50n") return Skycnos.FOG;
    if(icon == "50d") return Skycnos.FOG;
}

const loadPlay = () =>{
    load.style.display = "block";
}
const loadStop = () => {
    load.style.display = "none";
}
