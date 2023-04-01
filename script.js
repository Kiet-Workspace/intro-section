var navBox = document.querySelector("nav");
var navMain = document.querySelector(".nav-main");
var openNavIcon = document.querySelector(".open-nav");
var closeNavIcon = document.querySelector(".close-nav");


function showNav() {
    // navBox.style.display = "block";
    navBox.classList.add("show");
}

function hideNav() {
    // navBox.style.display = "none";
    navBox.classList.remove("show");
}

openNavIcon.addEventListener("click", showNav);
closeNavIcon.addEventListener("click", hideNav);