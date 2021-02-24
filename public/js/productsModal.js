const contentButton = document.querySelector("#filter");
// const content = document.querySelector("#orderBy h3");
const modal = document.querySelector("#modal");
// const descendingButton = document.querySelector("#descendingButton");
// const ascendingButton = document.querySelector("#ascendingButton");
const closeBtn = document.querySelector("#closeBtn");
const body = document.querySelector("body");

contentButton.addEventListener("click", function(e) {
    e.preventDefault();
    modal.style.display = "flex";
    body.classList.add("stopScrolling");
});

closeBtn.addEventListener("click", function(e) {
    e.preventDefault();
    modal.style.display = "none";
    body.classList.remove("stopScrolling");
});

// descendingButton.addEventListener("click", function() {
//     e.preventDefault();
//     let currentButton = document.querySelector(".active");
//     currentButton.className = currentButton.className.replace("active", "");
//     descendingButton.className = "active"
//     modal.style.display = "none";
// })

// ascendingButton.addEventListener("click", function() {
//     e.preventDefault();
//     let currentButton = document.querySelector(".active");
//     currentButton.className = currentButton.className.replace("active", "");
//     ascendingButton.className = "active"
//     modal.style.display = "none";
// })