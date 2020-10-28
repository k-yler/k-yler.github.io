const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}

//**************************************************//

const buttonAuth = document.querySelector(".button-auth");
const modalAuth = document.querySelector(".modal-auth");
const closeAuth = document.querySelector(".close-auth");
const logInForm = document.querySelector("#logInForm");
const logInInput = document.querySelector("#login");
const userName =  document.querySelector(".user-name");
const buttonOut = document.querySelector(".button-out");
const cardsRestaurants = document.querySelector(".cards-restaurants");
const containerPromo = document.querySelector(".container-promo");
const restaurants = document.querySelector(".restaurants");
const menu = document.querySelector(".menu");
const logo = document.querySelector(".logo");
const cardsMenu = document.querySelector(".cards-menu ");

//взять значения из локал сторедж если оно есть, иначе будет нал
let login = localStorage.getItem('Delivery');

console.log(modalAuth);

function toggleModalAuth() {
	modalAuth.classList.toggle("is-open");
	if (modalAuth.classList.contains("is-open")){
		disableScroll();
	} else{
		enableScroll();
	}
}

function autorized() {
	function logOut() {
		login = null;
		//удалить значения из локал сторедж
		localStorage.removeItem("Delivery");
		buttonAuth.style.display = "";
		userName.style.display = "";
		buttonOut.style.display = "";
		buttonOut.removeEventListener("click", logOut);
		checkAuth();
	}
	console.log("auth");
	userName.textContent = login;
	buttonAuth.style.display = "none";
	userName.style.display = "inline";
	buttonOut.style.display = "block";
	buttonOut.addEventListener("click", logOut);
}
function notAutorized() {
	console.log("not auth");
	
	function logIn(event) {
		event.preventDefault();
		login = logInInput.value;

		// загружаем логин в сторедж, чтобы при перезагрузке не пропадала авторизация
		localStorage.setItem("Delivery", login);

		//******************************************************************
		//если логин есть, разрешить выполнять действия слушателям, если нет, вывести алерт
		if(login){
			toggleModalAuth();
			buttonAuth.removeEventListener("click", toggleModalAuth);
			closeAuth.removeEventListener("click", toggleModalAuth);
			logInForm.removeEventListener("submit", logIn);
			logInForm.reset();
		} else {
			alert("Введите логин и пароль")
		}
		//*******************************************************************
		checkAuth();
	}
  
	buttonAuth.addEventListener("click", toggleModalAuth);
	closeAuth.addEventListener("click", toggleModalAuth);
	logInForm.addEventListener("submit", logIn);
	modalAuth.addEventListener("click", function(event){
		if (event.target.classList.contains("is-open")) {
			toggleModalAuth();
		}
	})
}

function checkAuth(){
	if(login){
		autorized();
	} else {
		notAutorized();
	}
}

checkAuth();

function disableScroll() {
	document.body.style.cssText = `
	position: relative;
	overflow: hidden;
	height: 100vh;
	`;
}

function enableScroll() {
	document.body.style.cssText = ``;
}

function createCardRestaurant() {
	const card = `
		<a class="card card-restaurant">
		<img src="img/tanuki/preview.jpg" alt="image" class="card-image"/>
		<div class="card-text">
			<div class="card-heading">
				<h3 class="card-title">Тануки</h3>
				<span class="card-tag tag">60 мин</span>
			</div>
			<div class="card-info">
				<div class="rating">
					4.5
				</div>
				<div class="price">От 1 200 ₽</div>
				<div class="category">Суши, роллы</div>
			</div>
		</div>
		</a>
	`;

	cardsRestaurants.insertAdjacentHTML("beforeend", card);
}

createCardRestaurant();
createCardRestaurant();
createCardRestaurant();

function createCardGood() {
	const card = document.createElement("section");
	card.classList = "card";
	card.insertAdjacentHTML("beforeend", `
						<img src="img/pizza-plus/pizza-vesuvius.jpg" alt="image" class="card-image"/>
						<div class="card-text">
							<div class="card-heading">
								<h3 class="card-title card-title-reg">Пицца Везувий</h3>
							</div>
							<div class="card-info">
								<div class="ingredients">Соус томатный, сыр «Моцарелла», ветчина, пепперони, перец
									«Халапенье», соус «Тобаско», томаты.
								</div>
							</div>
							<div class="card-buttons">
								<button class="button button-primary button-add-cart">
									<span class="button-card-text">В корзину</span>
									<span class="button-cart-svg"></span>
								</button>
								<strong class="card-price-bold">545 ₽</strong>
							</div>
						</div>
	`);

	cardsMenu.insertAdjacentElement("beforeend", card);

}

function openGoods(event) {
	const target = event.target;
	const restaurant = target.closest(".card-restaurant");
	console.log(restaurant);

	if(restaurant && login){
		containerPromo.classList.add("hide");
		restaurants.classList.add("hide");
		menu.classList.remove("hide");
		
		cardsMenu.textContent = ""; 
		
		createCardGood();
		createCardGood();
		createCardGood();
	} else {
		alert("Для начала авторизируйтесь");
		// toggleModalAuth();
		// checkAuth();
		// notAutorized();
		// autorized();
	}

}

cardsRestaurants.addEventListener("click", openGoods);
logo.addEventListener("click", function(){
	containerPromo.classList.remove("hide");
		restaurants.classList.remove("hide");
		menu.classList.add("hide");
});