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

// LOGICA PARA CALENDARIO//

document.addEventListener('DOMContentLoaded', function() {
    // Eventos reservados fijos
    var eventosReservados = [
        {
            title: "Reserva 1 - Tipo A",
            start: "2023-08-05",
        },
        {
            title: "Reserva 2 - Tipo B",
            start: "2023-08-10",
        },
        // Agrega más eventos reservados según tus necesidades
    ];

    // Eventos ingresados por el formulario
    var eventos = [];

    var calendarEl = document.getElementById('calendario');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [...eventosReservados, ...eventos], // Combinar eventos reservados y eventos ingresados
    });

    calendar.render();

    // Manejador del formulario
    document.getElementById('formularioCita').addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener valores del formulario
        var titulo = document.getElementById('titulo').value;
        var fecha = document.getElementById('fecha').value;
        var tipo = document.getElementById('tipo').value;

        // Agregar evento al array de eventos
        eventos.push({
            title: titulo + ' - ' + tipo,
            start: fecha,
        });

        // Actualizar el calendario con los nuevos eventos
        calendar.removeAllEvents();
        calendar.addEventSource([...eventosReservados, ...eventos]);

        // Limpiar el formulario
        document.getElementById('titulo').value = '';
        document.getElementById('fecha').value = '';
        document.getElementById('tipo').value = '';
    });
});

//logica para registro de contactos 

let formularioCount = 0;

function agregarFormulario() {
    formularioCount++;
    const contenedor = document.getElementById('contenedorFormularios');
    const formulario = document.createElement('form');
    formulario.id = `formulario${formularioCount}`;
    formulario.innerHTML = `
        <h2>Contacto ${formularioCount}</h2>
        <label for="nombre${formularioCount}">Nombre:</label>
        <input type="text" id="nombre${formularioCount}" name="nombre${formularioCount}">
        <label for="email${formularioCount}">Correo:</label>
        <input type="email" id="email${formularioCount}" name="email${formularioCount}"><hr>
        <label for="fono${formularioCount}">Fono:</label>
        <input type="fono" id="fono${formularioCount}" name="fono${formularioCount}">
        <button type="button" onclick="mostrarInformacion(${formularioCount})">Guardar Contacto</button>
        <hr>
    `;
    contenedor.appendChild(formulario);
}

function mostrarInformacion(formularioId) {
    const nombreInput = document.getElementById(`nombre${formularioId}`);
    const emailInput = document.getElementById(`email${formularioId}`);
    const fonoInput = document.getElementById(`fono${formularioId}`);

    const listaNombres = document.getElementById('listaNombres');
    const listaEmails = document.getElementById('listaEmails');
    const listaFono = document.getElementById('listaFono');
    
    const elementoNombre = document.createElement('p');
    elementoNombre.textContent = `${nombreInput.value}`;
    listaNombres.appendChild(elementoNombre);

    const elementoEmail = document.createElement('p');
    elementoEmail.textContent = `${emailInput.value}`;
    listaEmails.appendChild(elementoEmail);

    const elementoFono = document.createElement('p');
    elementoFono.textContent = `${fonoInput.value}`;
    listaFono.appendChild(elementoFono);
}

document.getElementById('agregarFormulario').addEventListener('click', agregarFormulario);

// LOGICA PARA GRAFICOS 
// Datos de ejemplo
const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
const dataLine1 = [10, 20, 30, 25, 15];
const dataLine2 = [5, 15, 25, 20, 10];
const dataBar1 = [50, 70, 40, 60, 30];
const dataBar2 = [20, 30, 40, 50, 60];

// Función para crear gráficos de línea
function createLineChart(canvasId, data) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    return new Chart(ctx, {
        type: 'line',
        data: {
        labels: labels,
        datasets: data
        }
    });
}

// Función para crear gráficos de barra
function createBarChart(canvasId, data) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    return new Chart(ctx, {
        type: 'bar',
        data: {
        labels: labels,
        datasets: data
        }
    });
}

// Crear gráficos
const lineChart1 = createLineChart('lineChart1', [
    {
        label: 'Datos 1',
        data: dataLine1,
        borderColor: 'red',
        fill: false
    },
    {
        label: 'Datos 2',
        data: dataLine2,
        borderColor: 'blue',
        fill: false
    }
]);

const lineChart2 = createLineChart('lineChart2', [
    {
        label: 'Datos 1',
        data: dataLine1,
        borderColor: 'green',
        fill: false
    }
]);

const barChart1 = createBarChart('barChart1', [
    {
        label: 'Datos 1',
        data: dataBar1,
        backgroundColor: 'orange'
    },
    {
        label: 'Datos 2',
        data: dataBar2,
        backgroundColor: 'purple'
    }
]);

const barChart2 = createBarChart('barChart2', [
    {
        label: 'Datos 1',
        data: dataBar1,
        backgroundColor: 'pink'
    }
]);