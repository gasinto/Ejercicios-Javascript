// Ejercicio 23
// Escribir un programa que calcule el volumen de un cilindro. Para ello se deberá solicitar al
// usuario que ingrese el radio y la altura. Mostrar el resultado por pantalla.
// volumen = π * radio2 * altura

document.write("<h1>Ejercicio 23</h1><br><br>");

let radio = Number(prompt("Ingrese radio en cm"));
let altura = Number(prompt("Ingrese altura en cm"));
volumen = (3.1415 * radio**2 * altura).toFixed(2);
document.write(`Volumen del cilindro: ${volumen}cm3`)