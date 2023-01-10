// Ejercicio 32
// Escribir un programa que convierta un valor dado en grados Fahrenheit a grados Celsius.
// NOTA: 1 °F es el equivalente de una diferencia de temperatura de 0,556 °C.

document.write("<h1>Ejercicio 32</h1><br><br>");

let F = Number(prompt("Ingrese los grados Fahrenheit a convertir"));

let C = (F * 0.556).toFixed(2);

document.write(`${F}° Fahrenheit equivales a ${C}° Celcius`);