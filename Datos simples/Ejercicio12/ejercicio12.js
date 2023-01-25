// Ejercicio 12
// Escribir un programa que pida al usuario dos números enteros y muestre por pantalla <n> entre <m> da un cociente <c> y un resto <r> donde <n> y <m> son los número introducidos por el usuario, <c> el cociente y <r> el resto de la división entera respectivamente.

let num1 = Number(prompt("Ingrese número uno"));
let num2 = Number(prompt("Ingrese número dos"));

document.write(`${num1} entre ${num2}: ${num1/num2}<br>`);
document.write(`El resto entre ambos números es: ${num1%num2}`);