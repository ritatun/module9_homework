// Напишите код приложения, интерфейс которого представляет собой 2 input и кнопку submit.
//В input можно ввести любое число. При клике на кнопку происходит следующее:

// Если оба числа не попадают в диапазон от 100 до 300 или введено не число — выводить ниже текст
//«одно из чисел вне диапазона от 100 до 300»;
// Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью
//fetch по URL https://picsum.photos/200/300, где первое число — ширина картинки, второе — высота.
// Пример: если пользователь ввёл 150 и 200, то запрос будет вида https://picsum.photos/150/200.
//После получения данных вывести ниже картинку на экран.

//найдем всех действующих лиц
const imageWidth = document.querySelector(".imageWidth");
const imageHeight = document.querySelector(".imageHeight");
// console.log(imageHeight.className)
const button = document.querySelector("button");
// console.log(button.className)
const infoDiv = document.querySelector(".info");
// console.log(infoDiv.className);
const imageDiv = document.querySelector(".imageHere");
// console.log(imageDiv.className)
// const url = `https://picsum.photos/${+width}/${+height}`


function checkData(){
    if ((!imageWidth.value.match(/^[1-3][0-9][0-9]$/)) || (!imageHeight.value.match(/^[1-3][0-9][0-9]$/))) {
        console.log("не попадают в диапазон");
        infoDiv.classList.add("active");
        imageDiv.innerHTML = "";
    } else {
    // console.log("попадают в диапазон");
    infoDiv.classList.remove("active");
    // console.log(imageWidth.value, imageHeight.value);
    getRequest(+imageWidth.value, +imageHeight.value)
    }
}

function getRequest(width, height) {
let url = `https://picsum.photos/${width}/${height}`;
fetch(url)
    .then((response) => {
        return response.url
    })
    .then((data) => {
        printImage(data)
    })
    .catch(() => {
        console.log("error");
    })
}

function printImage(imageSrc) {
    console.log(imageSrc);
    img = `<img src=${imageSrc}>`;
    imageDiv.innerHTML = img;
}


button.addEventListener("click", checkData);