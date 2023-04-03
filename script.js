var navBox = document.querySelector("nav");
var backNav = document.querySelector(".background-nav");
var openNavIcon = document.querySelector(".open-nav");
var closeNavIcon = document.querySelector(".close-nav");


function showNav() {
    backNav.style.display = "block";
    navBox.classList.add("show");
}

function hideNav() {
    backNav.style.display = "none";
    navBox.classList.remove("show");
}

openNavIcon.addEventListener("click", showNav);
closeNavIcon.addEventListener("click", hideNav);