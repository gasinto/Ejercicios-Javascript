// Ejercicio 8
// Un usuario quiere abrir una caja de ahorro en un banco, el cual ofrece un 5% de interés anual. Esta remuneración se añade al balance final de la cuenta, para luego ser cobrada por el usuario cumpliendo el plazo. Escribir un programa que permita ingresar al usuario el monto de la cuenta y calcule la cantidad de ahorros tras el primer año, segundo año y tercer año.

let montoCuenta = parseFloat(prompt("Dinero en cuenta"));
let primerAnio = montoCuenta + montoCuenta * 0.05;
let segundoAnio = primerAnio + primerAnio * 0.05;
let tercerAnio = segundoAnio + segundoAnio * 0.05;

document.write(`Inversiones en base a ${montoCuenta} <br>`);
document.write("<br>");
document.write(`Primer año: ${primerAnio}<br>`);
document.write(`Segundo año: ${segundoAnio}<br>`);
document.write(`Tercer año: ${tercerAnio}<br>`);