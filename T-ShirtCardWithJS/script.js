const container = document.querySelector("#container");

const btnBlack = document.querySelector("#colorBtnBlack");
const btnWhite = document.querySelector("#colorBtnWhite");
const btnBlue = document.querySelector("#colorBtnBlue");

const sizeCheck = document.querySelector("#sizeCheck");
const btnSizeS = document.querySelector("#sizeBtnS");
const btnSizeM = document.querySelector("#sizeBtnM");
const btnSizeL = document.querySelector("#sizeBtnL");

const btnCountMinus = document.querySelector("#countMinus");
const btnCountPlus = document.querySelector("#countPlus");
const countSpan = document.querySelector("#countSpan");
const countResult = document.querySelector("#counterResult");
let counter = 1;
const basePrice= Number(countResult.dataset.price); 
let price = basePrice;

let chosenColor = "";
let chosenSize = "";

const btnBasket = document.querySelector("#basketBtn");
const basketResult = document.querySelector("#basketResult")

function changeColor(newColor, colorName) {
    container.classList.remove("container-black", "container-blue");
    if (newColor) {
        container.classList.add(newColor);
    }
    chosenColor = colorName;
}


function changeSize(newSize) {
    sizeCheck.textContent = `Выбранный размер: ${newSize}`;
    chosenSize = newSize;
}

function counterPrice(value) {
    if (value === "+") {
        counter++;
    }
    else {
        if (counter > 1) {
            counter--;
        }
    }
    price = counter * basePrice;
    countSpan.textContent = String(counter);
    countResult.textContent = `Итого: ${price}$`;
}


btnBlack.addEventListener("click", function() {changeColor("container-black", "Чёрный")});
btnBlue.addEventListener("click", function() {changeColor("container-blue", "Синий")});
btnWhite.addEventListener("click", function() {changeColor(null, "Белый")});

btnSizeS.addEventListener("click", function() {changeSize("S")});
btnSizeM.addEventListener("click", function() {changeSize("M")});
btnSizeL.addEventListener("click", function() {changeSize("L")});

btnCountMinus.addEventListener("click", function() {counterPrice("-")});
btnCountPlus.addEventListener("click", function() {counterPrice("+")});

btnBasket.addEventListener("click", function() {
     if (chosenSize === "" || chosenColor === "") {
        basketResult.innerHTML = `<p style="color: red;">Пожалуйста, выберите цвет и размер!</p>`;
        return;
    }
    basketResult.innerHTML = `<p>
        Товар добавлен в корзину!<br>
        Цвет: ${chosenColor}<br>
        Размер: ${chosenSize}<br>
        Количество: ${counter}<br>
        Итого: ${price}$
    </p>`
})







