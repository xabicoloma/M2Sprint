// LOGICA PARA LOGIN//
function verificarCredenciales(username, password) {
    const usuarios = [
        { username: 'usuario1@gmail.com', password: 'contrasena1' },
        { username: 'usuario2@gmail.com', password: 'contrasena2' },
        // Agrega más usuarios según tus necesidades
    ];

    return usuarios.find(user => user.username === username && user.password === password);
}

function iniciarSesion() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    
    const username = usernameInput.value;
    const password = passwordInput.value;

    const usuarioValido = verificarCredenciales(username, password);

    if (usuarioValido) {
    window.location.href = "/PerfilUsuario/perfil.html";
    } else {
        alert('Credenciales inválidas. Inténtalo de nuevo.');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', iniciarSesion);
});

// LOGICA PARA MODAL 

const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


