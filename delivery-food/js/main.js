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

let login = localStorage.getItem('Delivery');

console.log(modalAuth);

function toggleModalAuth() {
   modalAuth.classList.toggle("is-open");
}

function autorized() {
	function logOut() {
		login = null;
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

		toggleModalAuth();
		buttonAuth.removeEventListener("click", toggleModalAuth);
		closeAuth.removeEventListener("click", toggleModalAuth);
		logInForm.removeEventListener("submit", logIn);
		logInForm.reset();
		checkAuth();
	}
  
	buttonAuth.addEventListener("click", toggleModalAuth);
	closeAuth.addEventListener("click", toggleModalAuth);
	logInForm.addEventListener("submit", logIn);
}

function checkAuth(){
	if(login){
		autorized();
	} else {
		notAutorized();
	}
}

checkAuth();