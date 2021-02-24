const burger = document.querySelector("#burgerButton");
const closeButton = document.querySelector(".close");

burger.addEventListener("click", function() {
    const navBar = document.querySelector(".sidenav");
    console.log(navBar.className);
    navBar.classList.add("openNavBar");
});

closeButton.addEventListener("click", function() {
    const navBar = document.querySelector(".sidenav");
    navBar.classList.remove("openNavBar");
});