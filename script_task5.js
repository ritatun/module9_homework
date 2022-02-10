const pageNum = document.querySelector(".pageNum");
const limitNum = document.querySelector(".limit");
const button = document.querySelector("button");
const messageDiv = document.querySelector(".message");
const imageList = document.querySelector(".imageList");
let bufer = localStorage.getItem('bufer');
// console.log(page.value);

function checkInputValue(){
    console.log(pageNum.value);
    console.log(limitNum.value);

    if ((!pageNum.value.match(/^([1-9]|10)$/)) && (!limitNum.value.match(/^([1-9]|10)$/))) {
        /* console.log("Номер страницы и лимит вне диапазона от 1 до 10"); */
        messageDiv.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";
    } else if ((!limitNum.value.match(/^([1-9]|10)$/)) && (pageNum.value.match(/^([1-9]|10)$/))) {
    /*   console.log("Лимит вне диапазона от 1 до 10"); */
        messageDiv.innerHTML = "Лимит вне диапазона от 1 до 10";
    } else if ((!pageNum.value.match(/^([1-9]|10)$/)) && (limitNum.value.match(/^([1-9]|10)$/))) {
    /*  console.log("Номер страницы вне диапазона от 1 до 10"); */
        messageDiv.innerHTML = "Номер страницы вне диапазона от 1 до 10";
    } else {
    /*  console.log("+"); */
        messageDiv.innerHTML = "";
        getRequest(+pageNum.value, +limitNum.value)
    }
}

function getRequest(page, limit) {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
    .then((response) => {
        console.log(response.status)
        return response.json()
    })
    .then((value) => {
        console.log(value)

        printPhotoList(value)
    })
    .catch((reason) => {
        console.log(reason)
    })
}

function printPhotoList(data) {
    
    localStorage.removeItem('bufer');
    bufer = "";
    for (let i = 0; i < data.length; i++) {
        bufer += `<div class="image">
                        <div class="imageItem" style="background-image: url(${data[i].download_url})"></div>
                        <div class="imageTitle">${data[i].author}</div>
                    </div>`;
        imageList.innerHTML = bufer;        
    }
    localStorage.setItem('bufer', bufer);
    imageList.innerHTML = bufer;  
   
}



button.addEventListener('click', checkInputValue);

window.onload = function () {
    console.log("done");
    imageList.innerHTML = bufer;
}