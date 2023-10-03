window.addEventListener("scroll", function() {
    var menu = document.querySelector(".interface");
    var scrollY = window.scrollY;

    if (scrollY > 100) {
        menu.classList.add("fixed");
    } else {
        menu.classList.remove("fixed");
    }
});
