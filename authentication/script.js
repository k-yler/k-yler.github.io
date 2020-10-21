let users = [
    {
        userName: "Жопка",
        userLog: "jopka",
        userPas: "alena",
    },{
        userName: "Алёна",
        userLog: "alena",
        userPas: "jopka",
    },{
        userName: "kulich",
        userLog: "kulich",
        userPas: "kulichpas",
    },{
        userName: "testik",
        userLog: "test",
        userPas: "test",
    }
];

let login = prompt("Введи логин:");
let password = prompt("Введи пароль:");

let greeting = authentication().join(" ") + "!";

alert(greeting);

function authentication(){
    let user;
    let complete;
    for( let i = 0; i < users.length; i++){
        if(login == users[i].userLog && password == users[i].userPas){
            complete = "sucess"
            user = users[i].userName;
        }
    }
    if(complete === "sucess"){
        return ['Привет,', user];
    } else{
        return ['Неверный логин или пароль'];
    }
}
