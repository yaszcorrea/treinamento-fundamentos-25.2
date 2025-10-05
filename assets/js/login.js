
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
    
    event.preventDefault();

    
    const usernameInput = document.getElementById('username');
    const username = usernameInput.value;

    
    if (username.trim() !== "") {
        
        localStorage.setItem('loggedInUser', username);

        
        window.location.href = 'catalogo.html';
    } else {
        alert("Por favor, digite um nome de usuário.");
    }
});