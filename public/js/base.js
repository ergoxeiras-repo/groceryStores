const gridChilds = document.querySelectorAll(".gridChilds");
const subTitlesWrapper = document.querySelectorAll(".subTitlesWrapper")


gridChilds.forEach(function(element, index) {
    element.addEventListener("click", function() {
        for(let i=0; i<index; i=i+1){
            subTitlesWrapper[i].classList.remove("expand");
        }
        subTitlesWrapper[index].classList.toggle("expand");
    })  
})