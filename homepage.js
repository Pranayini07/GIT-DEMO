document.addEventListener("DOMContentLoaded", function() {
   const loginForm = document.querySelector("form");
   loginForm.addEventListener("submit", function(event) {
       event.preventDefault();
       const formData = new FormData(loginForm);
       fetch("login.php", {
           method: "POST",
           body: formData
       })
       .then(response => response.text())
       .then(data => {
           // Handle the response from the server
           console.log(data);
       })
       .catch(error => {
           console.error("Error:", error);
       });
   });
});
document.addEventListener("DOMContentLoaded", function() {
   const registerForm = document.querySelector("form");
   registerForm.addEventListener("submit", function(event) {
       event.preventDefault();
       const formData = new FormData(registerForm);
       fetch("register.php", {
           method: "POST",
           body: formData
       })
       .then(response => response.text())
       .then(data => {
           // Handle the response from the server
           console.log(data);
       })
       .catch(error => {
           console.error("Error:", error);
       });
   });
});

