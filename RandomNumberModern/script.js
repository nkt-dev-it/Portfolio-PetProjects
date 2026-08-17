let min, max, total;

while (min === null || min === undefined || isNaN(Number(min)) || Number(min) < 0) {
    min = prompt("What will the minimum range be?");
}
min = Number(min);


while (max === null || max === undefined|| isNaN(Number(max)) || Number(max) <= min || Number(max) < 0) {
    max = prompt(`What will the maximum range be? (Must be greater than ${min})`);
}
max = Number(max); 

while (total === null || total === undefined || isNaN(Number(total)) || Number(total) <= 0) {
    total = prompt("How many attempts do you want to have?");
}
total = Number(total);

const randNum = Math.floor(Math.random() * (max - min + 1) + min);

function validateValue(value) {
    const message = document.querySelector("#message");
    if (Number(value) < min || Number(value) > max) {
        message.classList.add("error");
        message.textContent = `Error, input a number between ${min} and ${max}`;
    }
    else {
        total -= 1;
        if (Number(value) === randNum) {
            message.classList.add("success");
            message.textContent = "Right! You WIN!";
            document.querySelector("#btn").value = "RETURN";
            document.querySelector("#guess").disabled = true;
        }
        else if (total > 0) {
                message.classList.add("error");
                if (randNum < Number(value)) {
                    message.innerHTML = `NO! Your number is <span style="color: black;">BIGGER</span> than my number. You have ${total} attempts`;
                }
                else {
                    message.innerHTML = `NO! Your number is <span style="color: black;">SMALLER</span> than my number. You have ${total} attempts`;
                }
        }
        else {
            message.classList.add("error");
            message.textContent = `LOSE! Right answer: ${randNum}`;
            document.querySelector("#btn").value = "RETURN";
            document.querySelector("#guess").disabled = true;
        }
    }
}

document.querySelector("#btn").addEventListener("click", function() {
    if (this.value === "RETURN") {
        location.reload();
    }
});

document.addEventListener("DOMContentLoaded", function() { // для безопастности
    document.querySelector("#min").textContent = min;
    document.querySelector("#max").textContent = max;
})

document.querySelector("form").addEventListener("submit", function(event) { // submit - когда есть форма
    event.preventDefault(); // предотвращение деволтных действий
    const guessValue = document.querySelector("#guess").value;
    validateValue(guessValue);

})
