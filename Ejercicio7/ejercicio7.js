// Ejercicio 7
// Confeccionar un programa que pueda ingresar 2 números enteros y que calcule e informe mensajes aclaratorios la suma, el producto, el cociente y el resto.

let num1 = parseInt(prompt("Número 1"));
let num2 = parseInt(prompt("Número 2"));

let suma = num1 + num2;
let producto = num1 * num2;
let cociente = num1 / num2;
let resto = num1 % num2;

document.write("Resultados<br>");
document.write(`Suma: ${suma}<br>`);
document.write(`Producto: ${producto}<br>`);
document.write(`Cociente: ${cociente}<br>`);
document.write(`Resto: ${resto}<br>`);