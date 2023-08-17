// LOGICA PARA CALENDARIO//

document.addEventListener('DOMContentLoaded', function() {
    // Eventos reservados fijos
    var eventosReservados = [
        {
            title: "Examen - Sangre",
            start: "2023-08-05",
        },
        {
            title: "Cita - Cardiologo",
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