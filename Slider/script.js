const slides = {
    current: 1,
    count: 5,
};

let currentsSlide = 1;
const arrowLeft = document.querySelector("#prevBtn");


function updateWindowMetrics() {
    document.querySelector("#window-width").textContent = document.documentElement.clientWidth;
    document.querySelector("#window-height").textContent = document.documentElement.clientHeight;
}

function updateSliderMetrics() {
    document.querySelector("#slider-width").textContent = document.querySelector("#slider").offsetWidth;
    document.querySelector("#slider-height").textContent = document.querySelector("#slider").offsetHeight;
}

function updateCounter(needUpdateCount = false) {
    document.querySelector("#current-slide").textContent = slides.current;
    if (needUpdateCount) {
        document.querySelector("#slide-count").textContent = slides.count;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    updateWindowMetrics();
    updateSliderMetrics();
    updateCounter(true);
});

window.addEventListener("resize", function() {
    updateWindowMetrics();
    updateSliderMetrics();
});

function changeSlide(btnType) {
    document.querySelector(".active").classList.remove("active");
    switch (btnType) {
        case "next":
            if (slides.current === slides.count) {
            slides.current = 1;
            }
            else {
                slides.current++;
            }
            break;
        case "prev":
            if (slides.current === 1) {
            slides.current = slides.count;
            }
            else {
             slides.current--;
            }
            break;
    }
}

function ShowSlide() {
    document.querySelector(`.slide-${slides.current}`).classList.add("active");
    updateCounter();
}

document.querySelector("#slider").addEventListener("click", function(event) {
    if (event.target.matches("#prevBtn")){
       changeSlide("prev");
    }
    else if (event.target.matches("#nextBtn")) {
        changeSlide("next");
    }
    ShowSlide();
})

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        changeSlide("next");
        ShowSlide();
    }
    else if (event.key === "ArrowLeft") {
        changeSlide("prev");
        ShowSlide();
    }
});

const toggle = document.querySelector("#toggleSizeBtn");
toggle.addEventListener("click", function() {
    document.querySelector("#slider").style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: ${document.documentElement.clientWidth}px;
    height: ${document.documentElement.clientHeight}px;
    border-radius: 0;
    `;
    toggle.classList.add("fullSize");
});

document.addEventListener("keydown", function(event) {
    if (toggle.matches(".fullSize")) {
        if (event.code === "KeyQ") {
            document.querySelector("#slider").style.cssText = ``;
        }
    }
});