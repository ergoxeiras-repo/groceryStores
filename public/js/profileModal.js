const btn = document.querySelector(".user");
const profileModal = document.querySelector("#profileModal");

let showModal = false;

btn.addEventListener("click", function(e) {
  showModal = !showModal;
  if(showModal === true) {
    profileModal.style.display = "block";
  } else {
    profileModal.style.display = "none"
  }
});