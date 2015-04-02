(function() {
    var topHeader = document.querySelector(".top-header");
    var burger = document.querySelector(".top-header__hamburger");
    var mainNav = document.querySelector(".main-nav");
    

    burger.addEventListener("tap", function(event) {
        event.preventDefault();
        topHeader.classList.toggle("top-header--expand");
        mainNav.classList.toggle("main-nav--open");
        burger.classList.toggle("top-header__hamburger--close");
    });
})();