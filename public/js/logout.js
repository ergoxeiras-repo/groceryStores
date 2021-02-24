async function logout() {
    try {
        const result = await fetch("http://127.0.0.1:3000/api/users/logout", {
            method: "GET"
        });
        location.reload(true);      
    } catch (error) {
        console.log(error);
    }
}

// document.querySelectorAll(".logout").addEventListener("click", function(e) {
//     e.preventDefault();
//     logout();
// })

const elements = document.querySelectorAll('.logout');

elements.forEach(el => el.addEventListener('click', function(e) {
    e.preventDefault();
    logout();
}));