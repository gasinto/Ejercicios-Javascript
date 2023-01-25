// .Ejercicio 19
// Escriba un programa que permita al usuario ingresar el valor de dos variables numéricas de tipo entero. Posteriormente, el programa debe intercambiar los valores de ambas variables y mostrar el resultado final por pantalla. Por ejemplo, si el usuario ingresa los valores num1 = 9 y num2 = 3, la salida a del programa deberá mostrar: num1 = 3 y num2 = 9
// Ayuda: Para intercambiar los valores de dos variables se debe utilizar una variable auxiliar.

document.write("<h1>Ejercicio 19</h1><br><br>");

let valor1 = Number(prompt("Número 1"));
let valor2 = Number(prompt("Número 2"));
let aux = valor1;

document.write("Valos sin invertir:<br>");
document.write(`valor 1 = ${valor1}   valor 2 = ${valor2}<br><br>`);

valor1 = valor2;
valor2 = aux;

document.write("Valores invertidos:<br>");
document.write(`valor 1 = ${valor1}   valor 2 = ${valor2}`)