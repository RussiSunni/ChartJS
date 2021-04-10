var ctx = $("#canvas-1");

var myBarChart = new Chart(ctx, {
    type: 'horizontalBar',
    data:
    {
        labels: ["15'", "30'", "45'", "60'", "75'", "90'"],
        datasets:
            [{
                label: 'goals',
                data: [1, 0, 0, 2, 1, 1],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1
            }]

    },
    options:
    {
        scales:
        {
            yAxes: [{
                ticks:
                {
                    beginAtZero: true
                }
            }]
        }
    }

});

var ctx = $("#canvas-2");

var myBarChart = new Chart(ctx, {
    type: 'bar',
    data:
    {
        labels: ["player 1", "player 2", "player 3", "player 4", "player 5", "player 6", "player 7", "player 8", "player 9", "player 10", "player 1", "player 1"],
        datasets:
            [{
                label: 'goals per player',
                data: [1, 2, 0, 4, 4, 3, 6, 2, 7, 1],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1
            }]

    },
    options:
    {
        scales:
        {
            yAxes: [{
                ticks:
                {
                    beginAtZero: true
                }
            }]
        }
    }

});

