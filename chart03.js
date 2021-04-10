var ctx = $("#canvas-1");

var myBarChart = new Chart(ctx, {
type: 'line',
data:
{
labels: [],
datasets:
[{
label: 'Goal Difference',
data: [1, 2, 5, 3, 4, -2, -3, 1, 5, -1 ,2, -4, -1, 1],
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
},
elements:
{
line:
{
tension: 0, // disables bezier curves
}
}
}

});


var ctx = $("#canvas-2");

var myBarChart = new Chart(ctx, {
type: 'bar',
data:
{
labels: [],
datasets:
[{
label: '% possession',
data: [50, 60, 30, 25],
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


var ctx = $("#canvas-3");

var myBarChart = new Chart(ctx, {
type: 'bar',
data:
{
labels: ["First", "Second", "Third", "Fourth"],
datasets:
[{
label: '% possession',
data: [50, 60, 30, 25],
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


var ctx = $("#canvas-4");

var myBarChart = new Chart(ctx, {
type: 'bar',
data:
{
labels: ["First", "Second", "Third", "Fourth"],
datasets:
[{
label: '% possession',
data: [50, 60, 30, 25],
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


var ctx = $("#canvas-5");

var myBarChart = new Chart(ctx, {
type: 'bar',
data:
{
labels: ["First", "Second", "Third", "Fourth"],
datasets:
[{
label: '% possession',
data: [50, 60, 30, 25],
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


var ctx = $("#canvas-6");

var myBarChart = new Chart(ctx, {
type: 'bar',
data:
{
labels: ["First", "Second", "Third", "Fourth"],
datasets:
[{
label: '% possession',
data: [50, 60, 30, 25],
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