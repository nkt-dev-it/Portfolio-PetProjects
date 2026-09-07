const btnLight = document.querySelector("#btnLight");
const btnDark = document.querySelector("#btnDark");
const btnGreet = document.querySelector("#btnGreet");

const btnSalut = document.querySelector("#btnSalut");
const btnHeart = document.querySelector("#btnHeart");
const btnStar = document.querySelector("#btnStar");

const user = document.querySelector("#user");
const text = document.querySelector("#text");
const error = document.querySelector("#error");

const btnResult = document.querySelector("#btnResult");

const inf = document.querySelector(".information");

function ChangeThem(value) {
    btnDark.classList.remove("active");
    btnGreet.classList.remove("active");
    btnLight.classList.remove("active");
    inf.classList.remove("inf-greet", "inf-dark", "inf-light")
    if (value === "light") {
        btnLight.classList.add("active");
        inf.classList.add("inf-light")
    }
    else if (value === "dark") {
        btnDark.classList.add("active");
        inf.classList.add("inf-dark")
    }
    else if (value === "greet") {
        btnGreet.classList.add("active");
        inf.classList.add("inf-greet")
    }
}

function ChangeEmoji(value) {
    btnSalut.classList.remove("active");
    btnHeart.classList.remove("active");
    btnStar.classList.remove("active");
    if (value === "star") {
        btnStar.classList.add("active");
        document.querySelector("#emoji").textContent = "⭐";
    }
    else if (value === "heart") {
        btnHeart.classList.add("active");
        document.querySelector("#emoji").textContent = "❤️";
    }
    else if (value === "salut") {
        btnSalut.classList.add("active");
        document.querySelector("#emoji").textContent = "🎉";
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    btnLight.addEventListener("click", ChangeThem.bind(null, "light"));
    btnDark.addEventListener("click", ChangeThem.bind(null, "dark"));
    btnGreet.addEventListener("click", ChangeThem.bind(null, "greet"));

    btnSalut.addEventListener("click", ChangeEmoji.bind(null, "salut"));
    btnHeart.addEventListener("click", ChangeEmoji.bind(null, "heart"));
    btnStar.addEventListener("click", ChangeEmoji.bind(null, "star"));
})

btnResult.addEventListener("click", function() {
    const userName = user.value.trim();
    const userText = text.value.trim();

    if (userName === "" || userText === "") {
        error.textContent = "Заполните все поля!";
    }

    else {
        error.textContent = ""; 
        document.querySelector("#forUser").textContent = `Для: ${userName}`;
        document.querySelector("#greetText").textContent = userText;
    }

     
})

