$(document).ready(function (){
    $('#fullpage').fullpage({
        sectionsColor: ['white', 'white'],
        scrollingSpeed: 900
    });
});

const bur = [
    `<div class="img"><img src="img/Cutlet.png"></div>`,
    `<div class="img"><img src="img/Mayo.png"></div>`,
    `<div class="img"><img src="img/burger/onion.png"></div>`,
    `<div class="img"><img src="img/burger/tomato.png"></div>`,
    `<div class="img"><img src="img/burger/cucumber.png"></div>`,
    `<div class="img"><img src="img/Cheese.png"></div>`,
    `<div class="img"><img src="img/Salad.png"></div>`,
    `<div class="img"><img src="img/Bun.png"></div>`
]

const items = [
    {
        kcal: 12,
        sec: 6,
        g: 7,
        price: 2,
        portion: 0
    },
    {
        kcal: 12,
        sec: 6,
        g: 7,
        price: 0.2,
        portion: 0
    },
    {
        kcal: 12,
        sec: 6,
        g: 7,
        price: 0.2,
        portion: 0
    },
    {
        kcal: 12,
        sec: 6,
        g: 7,
        price: 0.2,
        portion: 0
    },
    {
        kcal: 8,
        sec: 5,
        g: 4,
        price: 0.2,
        portion: 0
    },
    {
        kcal: 8,
        sec: 5,
        g: 4,
        price: 1,
        portion: 0
    },
    {
        kcal: 8,
        sec: 5,
        g: 4,
        price: 1,
        portion: 0
    },
    {
        kcal: 8,
        sec: 5,
        g: 4,
        price: 1,
        portion: 0
    }
];

let st = document.querySelectorAll('.portion');


let bill = 0.0;
let kcal = 50;
let min  = 0;
let g    = 20;

let buttonsPlus = document.querySelectorAll(".btn-plus");

let buttonsMinus = document.querySelectorAll(".btn-minus");

for(let i = 0; i < buttonsPlus.length; i++){
    buttonsPlus[i].addEventListener('click', plus);
}

for(let i = 0; i < buttonsMinus.length; i++){
    buttonsMinus[i].addEventListener('click', minus);
}

function change(){
    for(let i = 0; i < st.length; i++){
        st[i].innerHTML = items[i].portion;
    }
    document.querySelector(".bill").innerHTML = `$${bill.toFixed(1)}`;
    document.querySelector(".kcalValue").innerHTML = kcal;
    document.querySelector(".minValue").innerHTML = min;
    document.querySelector(".gValue").innerHTML = g;

}

function plus(event){
    let target = event.target;
    for( let i = 0; i < buttonsPlus.length; i++){
        if (target && target == buttonsPlus[i]){
            bill += items[i].price;
            kcal += items[i].kcal;
            min += items[i].sec;
            g += items[i].g;
            items[i].portion++;
            change();
            dis(i);
            addItem(i);
            break;
        }
    }
    // console.log(bill);
}

function minus(event){
    let target = event.target;
    for( let i = 0; i < buttonsMinus.length; i++){
        if (target && target == buttonsMinus[i] && items[i].portion != 0){
            bill -= items[i].price;
            kcal -= items[i].kcal;
            min -= items[i].sec;
            g -= items[i].g;
            items[i].portion--;
            change();
            dis(i);
            delItem(i);
            break;
        }
    }
}

function dis(i){
    buttonsMinus[i].classList.remove("disable");
    if(items[i].portion == 0){
        buttonsMinus[i].classList.add("disable");
    }
    gift();
}

function gift(){
    if(bill >= 5){
        document.querySelector(".gift-prew").style.display = "none";
        document.querySelector('.gift-gift').style.display = "block";
    } else{
        document.querySelector(".gift-prew").style.display = "block";
        document.querySelector('.gift-gift').style.display = "none";
    }
}

let fullBurg = [];
foo();

function addItem(i) {
    fullBurg.push(bur[i]);
    // console.log(fullBurg);
    foo();    
}

function delItem(i){
    for( let k = 0; k < fullBurg.length; k++){
        if(fullBurg[k] == bur[i]){
            fullBurg.splice(k, 1);
            break;
        }
    }
    // console.log(fullBurg);
    document.querySelector(".burger").innerHTML = "";
    // fullBurg = [`<div class="img"><img src="img/BunBottom.png" alt=""></div>`];
    // console.log(fullBurg);
    foo(); 
}
function foo(){
    // console.log(fullBurg);
    document.querySelector(".burger").innerHTML = `<div class="img"><img src="img/BunBottom.png" alt=""></div>`;
    for( let i = 0; i <fullBurg.length; i++){
        document.querySelector(".burger").innerHTML += fullBurg[i];
    }
}

window.addEventListener('mousemove', event =>{
    // console.log(event.pageX + "x");
    // console.log(event.pageY + "y");
    let x = event.pageX / 9;
    let y = event.pageY / 9;
    // img = document.querySelector('.burger-img');
    // img.style.transform = `translateX(${x}px) translateY(${y}px)`;
    document.querySelector(".q1").style.transform = `translateX(${-x/2.3}px) translateY(${y-280}px)`;
    document.querySelector(".q2").style.transform = `translateX(${x*1.5}px) translateY(${(y-140)}px)`;
    document.querySelector(".q3").style.transform = `translateX(${-x/2}px) translateY(${(y-200)}px)`;
    document.querySelector(".q4").style.transform = `translateX(${x*1.8}px) translateY(${(y-40)}px)`;
    document.querySelector(".q5").style.transform = `translateX(${-x/2.5}px) translateY(${(y+40)}px)`;
    document.querySelector(".q6").style.transform = `translateX(${x*1.9}px) translateY(${y+80}px)`;
    document.querySelector(".q7").style.transform = `translateX(${-x/2.3}px) translateY(${y+120}px)`;
    document.querySelector(".q8").style.transform = `translateX(${x*1.5}px) translateY(${y+180}px)`;
})

// document.querySelector('.modal').addEventListener('click', () =>{
//     console.log("AAAAAAAAAAAAAAAAAAAAAAAAa");
// })
document.querySelector('.order').addEventListener("click", function(){
    document.querySelector(".modal").style.display = "block";
    document.querySelector(".modal").style.opacity = "1";
})

document.querySelector(".button-ok").addEventListener("click", () =>{
    document.querySelector(".modal").style.display = "none";
})