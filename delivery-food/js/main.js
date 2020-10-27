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