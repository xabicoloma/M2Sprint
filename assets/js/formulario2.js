let formularioCount = 0;

function agregarFormulario() {
    formularioCount++;
    const contenedor = document.getElementById('contenedorFormularios');
    const formulario = document.createElement('form');
    formulario.id = `formulario${formularioCount}`;
    formulario.innerHTML = `
        <h2>Enfermedad ${formularioCount}</h2>
        <label for="nombre${formularioCount}">Enfermedad:</label>
        <input type="text" id="nombre${formularioCount}" name="nombre${formularioCount}">
        <label for="email${formularioCount}">Fecha:</label>
        <input type="email" id="email${formularioCount}" name="email${formularioCount}"><hr>
        <label for="fono${formularioCount}">Gravedad:</label>
        <input type="fono" id="fono${formularioCount}" name="fono${formularioCount}">
        <button type="button" onclick="mostrarInformacion(${formularioCount})">Guardar Enfermedad</button>
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

