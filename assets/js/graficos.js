document.addEventListener('DOMContentLoaded', function() {
    // Datos del gráfico
    var datos = {
        labels: ['Febrero', 'Marzo', 'Abril', 'Mayo','Junio'],
        datasets: [
            {
                label: 'Referencias',
                data: [5, 5, 5, 5, 5],
                borderColor: 'blue',
                backgroundColor: 'transparent',
                borderWidth: 2,
            },
            {
                label: 'Resultados',
                data: [3.1, 6.8, 2.6, 4.2, 3.1],
                borderColor: 'red',
                backgroundColor: 'transparent',
                borderWidth: 2,
            }
        ]
    };

    var config = {
        type: 'line',
        data: datos,
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        },
    };

    var graficoLineas = new Chart(document.getElementById('resultadohemograma'), config);
});

document.addEventListener('DOMContentLoaded', function() {
    // Datos del gráfico
    var datos = {
        labels: ['Diciembre', 'Enero','Febrero', 'Marzo', 'Abril'],
        datasets: [
            {
                label: 'Referencias',
                data: [5, 5, 5, 5, 5],
                borderColor: 'blue',
                backgroundColor: 'transparent',
                borderWidth: 2,
            },
            {
                label: 'Resultados',
                data: [3.1, 6.8, 2.6, 4.2, 3.1],
                borderColor: 'red',
                backgroundColor: 'transparent',
                borderWidth: 2,
            }
        ]
    };

    var config = {
        type: 'line',
        data: datos,
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        },
    };

    var graficoLineas = new Chart(document.getElementById('resultadoorina'), config);
});