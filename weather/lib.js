let long;
let lat;
let degree = document.querySelector(".degree");
let sity = document.querySelector(".sity");
let weather = document.querySelector(".weather");
// console.log(degree, sity, weather); 

let nav = navigator.geolocation.getCurrentPosition(pos => {
    lat = pos.coords.latitude;
    console.log(lat);
    long = pos.coords.longitude
    console.log(long);
    let apiKey = '8c6382a4c537bb614eb1ac5d1a8bea31';
    let proxy = `https://cors-anywhere.herokuapp.com/`;
    let api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&lang=en`;
    try{
        fetch(api).then(response =>{
            return response.json().then(data => {
                // console.log(data.weather);
                showWeather(data);
            })
        })
    } catch (e){
        console.log(e);
    }
});
// андерскор лодаш

function showWeather(data){
    console.log(data);
    // let body = document.querySelector("body");
    // body.innerHTML += JSON.stringify(data.weather[0].main);
    weather.innerHTML = JSON.stringify(data.weather[0].description).replace(/"/g, "");
    let tmp = JSON.stringify(data.main.temp);
    tmp = Number(tmp).toFixed()-273;
    degree.innerHTML = " " + tmp;
    sity.innerHTML = JSON.stringify(data.name).replace(/"/g, "");
}

function showWeatherOfSity(){
    let apiKey = '8c6382a4c537bb614eb1ac5d1a8bea31';
    let proxy = `https://cors-anywhere.herokuapp.com/`
    let cityName = document.querySelector("input").value;
    let api = `${proxy}api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    try{
        fetch(api).then(response =>{
            return response.json().then(data => {
                showWeather(data);
                console.log(data);
            })
        })
    } catch (e){
        console.log(e);
    }
}
// showWeatherOfSity();

document.querySelector("button").addEventListener("click", showWeatherOfSity);


