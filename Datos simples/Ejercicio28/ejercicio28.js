// Ejercicio 28
// Hacer un programa que ingrese por teclado un número total de segundos y que luego pueda mostrar la cantidad de horas, minutos y segundos que existen en el valor ingresado.

document.write("<h1>Ejercicio 28</h1>");

let totalSegundos = parseInt(prompt("Ingrese la cantidad de segundos totales"));
let horas = (totalSegundos / 3600).toFixed(0);
let segundosRestantes = totalSegundos % 3600;
let minutos = (segundosRestantes / 60).toFixed(0);
segundosRestantes = (segundosRestantes % 60).toFixed(0);

document.write(`Segundos totales: ${totalSegundos}<br><br>`);
document.write(`Horas: ${horas}<br>`);
document.write(`Minutos: ${minutos}<br>`);
document.write(`Segundos: ${segundosRestantes}`);