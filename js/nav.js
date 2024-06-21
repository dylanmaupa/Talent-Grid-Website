const hamburger = document.querySelector(".hamburger")
const nav = document.querySelector(".nav-links")

hamburger.onclick = function(){
    nav.classList.toggle("navActive")
}