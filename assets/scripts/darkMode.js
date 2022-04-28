let imgSun = document.querySelector("#dark-mode")

function darkMode() {
    let body = document.querySelector("body")
    body.classList.toggle("active")

}

imgSun.onclick = darkMode;

