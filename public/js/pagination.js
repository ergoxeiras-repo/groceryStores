let buttons = document.getElementsByClassName("button");

for(let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        let currentButton = document.querySelector(".active");
        currentButton.className = currentButton.className.replace("active", "");
        this.className = this.className + " active";
    });
}