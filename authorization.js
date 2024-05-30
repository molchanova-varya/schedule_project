document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    try {
        const response = await fetch("/login", {
            method: "POST",
            headers: { "Accept": "application/json", "Content-Type": "application/json" },
            body: JSON.stringify({ 
                username: username,
                password: password
            })
        });

        if (response.ok) {
            redirectToExamPage();
        } else {
            console.log("Authentication failed. Please try again.");
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
});

function redirectToExamPage() {
    window.location.href = "exam.html";
}
