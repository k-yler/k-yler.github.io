let long;
let lat;
let apiKey = '8c6382a4c537bb614eb1ac5d1a8bea31';
let degree = document.querySelector(".degree");
let sity = document.querySelector(".sity");
let weather = document.querySelector(".weather");
let region = document.querySelector(".region");
let input = document.querySelector("input");
let loading = document.querySelector(".loading");   
let arr = [];
// arr = arr.slice(0, 3);
// console.log(arr);
// console.log(degree, sity, weather); 

let nav = navigator.geolocation.getCurrentPosition(pos => {
    lat = pos.coords.latitude;
    console.log(lat);
    long = pos.coords.longitude
    console.log(long);
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&lang=en`;
    getData(api);
});
// андерскор лодаш

function showWeather(data){
    weather.innerHTML = JSON.stringify(data.weather[0].description).replace(/"/g, "");
    let tmp = JSON.stringify(data.main.temp);
    tmp = Number(tmp).toFixed()-273;
    degree.innerHTML = " " + tmp;
    sity.innerHTML = JSON.stringify(data.name).replace(/"/g, "");
    region.innerHTML = JSON.stringify(data.sys.country).replace(/"/g, " ");
    let icon = data.weather[0].icon;
    console.log(icon);
    let img = document.querySelector(".img");
    console.log(img);
    img.src  = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    console.log(img);
}

function showWeatherOfSity(){
    let cityName = document.querySelector("input");
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value.trim()}&appid=${apiKey}`;
    getData(api, cityName.value.trim());
}

function getData(api, name = undefined){
    loading.style.opacity = 1;
    fetch(api).then(response => {
        return response.json()
    }).then(data=> {
        // console.log(data);
        if(data.cod == 404){
            alert("I couldn't find this city. Try again");
            loading.style.opacity = 0;
        } else {
            showWeather(data);
            loading.style.opacity = 0;
            if(name != undefined){
                forArr(name);
            }
        }
    })
}

document.querySelector("button").addEventListener("click", showWeatherOfSity);

let list = document.querySelector(".list");

list.addEventListener("click", event=>{
    let city = event.target.innerHTML
    console.log(city);
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&appid=${apiKey}`;
    getData(api);
});

function forArr(newCity){
    arr.unshift(newCity);
    // console.log(arr);

    if(arr.length == 4){
        arr.pop();
    }
    console.log(arr);
    list.innerHTML = "";
    for(let i = 0; i < arr.length; i++){
        let tmp = `<p>${arr[i]}</p>`
        list.innerHTML += tmp;
    }
}

