let menu = document.querySelector(".menu");
let menuBtn = document.querySelector(".header__btn");
let menuIcon = document.querySelector(".menu-icon");

menuBtn.addEventListener("click", function(){
    if(menuIcon.classList.contains("fa-bars")){
        menu.style.left = "0";
        menuIcon.classList = "fa fa-times";
    }else {
        menu.style.left = "-256px";
        menuIcon.classList = "fa fa-bars";
    }
})