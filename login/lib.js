let button = document.getElementById("button");

let users = [
    {
        userName: "UserOne",
        userLogin: "UserOneLog",
        userPassword: "UserOnePas"
    },
    {
        userName: "UserTwo",
        userLogin: "UserTwo",
        userPassword: "UserTwo"
    },
    {
        userName: "UserThree",
        userLogin: "UserThree",
        userPassword: "UserThree"
    },
    {
        userName: "Жопка",
        userLogin: "alena",
        userPassword: "1234"
    },
    {
        userName: "MoRiNaD =)))))))",
        userLogin: "marina",
        userPassword: "1234"
    },
    {
        userName: "admin",
        userLogin: "admin",
        userPassword: "admin"
    },
    {
        userName: "Пупсик",
        userLogin: "alena",
        userPassword: "123456"
    }
]

function muFunc(){
    let password = document.getElementById("inputPassword");
    let login = document.getElementById("inputLogin");
    let doneAut = 0;
    for(let i = 0; i < users.length; i++){
        if(login.value == users[i].userLogin && password.value == users[i].userPassword){
            alert("Привет, " + users[i].userName);
            password.value = "";
            login.value = "";
            doneAut = 1;
        } 
    }
    if(doneAut == 0){
        alert("Что-то пошло не так...");
        password.value = "";
        login.value = "";
    }
}

button.addEventListener("click", muFunc);

