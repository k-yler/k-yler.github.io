let long;
let lat;
// let inf;

let nav = navigator.geolocation.getCurrentPosition(pos => {
    lat = pos.coords.latitude;
    console.log(lat);
    long = pos.coords.longitude
    console.log(long);
    let apiKey = '8c6382a4c537bb614eb1ac5d1a8bea31';
    let proxy = `https://cors-anywhere.herokuapp.com/`
    let api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&lang=ru`;
    // let apix = 'https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?lat=48.87954630000001&lon=36.2857079&appid=8c6382a4c537bb614eb1ac5d1a8bea31';
    // console.log(api);
    fetch(api).then(response =>{
        return response.json().then(data => {
            console.log(data)
            let sity = JSON.stringify(data.name);
            let degrees =JSON.stringify(Number(data.main.temp).toFixed());
            let cloud = JSON.stringify(data.weather[0].description);
            // let str = degrees.replace(/"/g, "_")
            // console.log(str);
            console.log(degrees);
            document.querySelector("body").innerHTML += sity;
            document.querySelector("body").innerHTML += degrees;
            document.querySelector("body").innerHTML += cloud;
        })
    })
});
// console.log(inf);
// андерскор лодаш

// let api = 'https://jsonplaceholder.typicode.com/users';
// let api = 'https://api.gismeteo.net/v2/weather/current/?latitude=54.35&longitude=52.52';
// let proxy = `https://cors-anywhere.herokuapp.com/`;
// let all = proxy + api;

// let apiKey = '8c6382a4c537bb614eb1ac5d1a8bea31';
// let api = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`;

// let out = fetch(api)
//     .then(response => { return response.json()}).then(data =>{console.log(data);});

