const button = document.querySelector("#button");
let todo = document.querySelector("#todo");
let delButton = document.querySelector("#delButton");
//проверяю если есть в локалке что-то то заливаю в разметку, если нет то массив пустой, иначе будет жаловаться метод пуш
let curent = 0;
let arr = [];
let temp = JSON.parse(localStorage.getItem('item'));
if(temp!=null){
    arr = temp;
} else{
    arr = [];
}
console.log(arr);
//если не пустой массив то
if(arr.length >= 0){
    arr = JSON.parse(localStorage.getItem('item'));
    for (i in arr){
        let tmp = `<li id="todolist${i}"> ${arr[i]}</li>`;
        todo.innerHTML += tmp;
        curent++;
    }
};


button.addEventListener("click", foo);

function foo() {
    let text = document.querySelector("#textArea");
    if(text.value){
        let tmp = `<li id="todolist${curent}"> ${text.value}</li>`;
        curent++;
        todo.innerHTML += tmp;
        arr.push(text.value);
        localStorage.setItem('item', JSON.stringify(arr));
        text.value = "";
    }
    console.log(JSON.parse(localStorage.getItem('item')));
};

delButton.addEventListener("click", function() {
    arr = [];
    localStorage.clear();
    todo.innerHTML = "";
});