const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const img = document.querySelector(".image");



window.addEventListener("DOMContentLoaded", function(event) {
    
    btn1.addEventListener("click", function(event) {
        event.preventDefault();
        img.style.display = "block";
        document.querySelector("#thanks").style.display = "block";

        const url = this.href;
        setTimeout(() => {
        window.location.href = url;
      }, 1000);
    })
    btn2.addEventListener("mouseenter", function(event) {
        btn2.style.cssText = `
        position: absolute;
        top: ${Math.floor(Math.random() * window.innerHeight + 1)}px;
        left: ${Math.floor(Math.random() * window.innerWidth + 1)}px;`
    });
    
    btn2.addEventListener("click", function(event) {
        btn2.style.cssText = `
        position: absolute;
        top: ${Math.floor(Math.random() * window.innerHeight + 1)}px;
        left: ${Math.floor(Math.random() * window.innerWidth + 1)}px;`
    });
    
})
