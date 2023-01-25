// Ejercicio 36
// Pide al usuario dos números y muestra la “distancia” entre ellos (el valor absoluto de su diferencia, de modo que el resultado sea siempre positivo).

document.write("<h1>Ejercicio 36</h1><br><br>");

let num1 = Number(prompt("Ingrese primer número"));
let num2 = Number(prompt("Ingrese segundo número"));

let resultado = Math.abs(num1 - num2);

document.write(`La distante entre el número ${num1} y el número ${num2} es de ${resultado} espacios`);