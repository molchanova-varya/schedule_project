document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // логика для аутентификации

    redirectToExamPage();
});

function redirectToExamPage() {
    window.location.href = "exam.html";
}