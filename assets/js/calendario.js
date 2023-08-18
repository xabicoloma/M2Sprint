// LOGICA PARA CALENDARIO//

document.addEventListener('DOMContentLoaded', function() {
    var eventosReservados = [
        {
            title: "Examen - Sangre",
            start: "2023-08-05",
        },
        {
            title: "Cita - Cardiologo",
            start: "2023-08-10",
        },
    ];

    var eventos = [];

    var calendarEl = document.getElementById('calendario');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [...eventosReservados, ...eventos], 
    });

    calendar.render();

    document.getElementById('formularioCita').addEventListener('submit', function(event) {
        event.preventDefault();

        var titulo = document.getElementById('titulo').value;
        var fecha = document.getElementById('fecha').value;
        var tipo = document.getElementById('tipo').value;

        eventos.push({
            title: titulo + ' - ' + tipo,
            start: fecha,
        });

        calendar.removeAllEvents();
        calendar.addEventSource([...eventosReservados, ...eventos]);

        document.getElementById('titulo').value = '';
        document.getElementById('fecha').value = '';
        document.getElementById('tipo').value = '';
    });
});