// Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно
// ввести любое число. При клике на кнопку происходит следующее:

// Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
// Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL
// https://picsum.photos/v2/list?limit=10, где get-параметр limit — это введённое число.

const myInput = document.querySelector("input"); //нашла инпут
let value = myInput.value; //нашла величину введенных данных
const button = document.querySelector("button"); //нашла кнопку
const div = document.querySelector("div"); //абзац с сообщением о неверном вводе
let divImage = document.querySelector(".imageHere"); //абзац куда пихнем фото
// console.log(myInput.value);

//обработчик кнопки
button.addEventListener("click", () => {
// console.log(div.getAttribute("class"));
checkData(myInput.value)
})



//проверка величины введенных данных
function checkData(data){
if (!data.match(/^[1-9]0?$/)) { //число вне диапазона
// console.log(data);
// console.log(div.getAttribute("class"));
div.classList.add("active");
divImage.innerHTML = ""


} else { //число в диапазоне
// console.log(data);
// console.log(div.getAttribute("class"));
div.classList.remove("active");
useRequest(+myInput.value)
}
}


//функция осуществления запроса

function useRequest(limit){
const reqUrl = `https://picsum.photos/v2/list?limit=${+limit}` //адрес запроса
// console.log(reqUrl);

xhr = new XMLHttpRequest();
xhr.open("get", reqUrl);

//функция по наполнению сайта принятыми картинками
xhr.onload = function() {
// console.log(xhr.response)
const response = JSON.parse(xhr.response);
// console.log(response)

printPhoto(response)


};
xhr.send()

}

function printPhoto(responseData) {
let bufer = "";

responseData.forEach(function(item) {
author = item.author;
imageURL = item.download_url;
height = item.height;
width = item.width;
id = item.id;
bufer += `<div>
<div class="image" style="background-image: url(${imageURL})"></div>
<div class="title">
<p class="title__author">${author}</p>
</div>
</div>`;

// console.log(author);
// console.log(imageURL);
// console.log(height);
// console.log(width);
// console.log(id);

})

divImage.innerHTML = bufer
}