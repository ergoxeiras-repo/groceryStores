 
async function login(email, password) {
    try {
        const res = await axios.post("http://127.0.0.1:3000/api/users/login", {
            email,
            password
        })
        location.assign("/");
    } catch (error) {
        // console.log(error.response.data.message);
        showAlert(error.response.data.message);
    }
}

async function showAlert(message) {
    hideAlert();
    const markup = `<div id="alert">${message}</div>`;
    document.querySelector("body").insertAdjacentHTML("afterbegin", markup); 
    window.setTimeout(hideAlert, 5000);
}

async function hideAlert() {
    const el = document.querySelector("#alert");
    if(el){
        el.parentElement.removeChild(el);
    }    
}

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    login(email, password);
});