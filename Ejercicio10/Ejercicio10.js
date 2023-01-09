// Ejercicio 10
// Una panadería vende pan a $300 el kg y medialunas a $30 cada una. Debido a que el pan que queda es de ayer, se le aplicará un descuento del 40%. Escribir un programa que solicite cuantos kilos de pan y cuantas medialunas se quieren comprar y muestre por pantalla el monto a pagar.

let kgPan = parseInt(prompt("Ingrese los Kg de pan"));
let cantMedialunas = parseInt(prompt("Ingrese la cantidad de medialunas"));
let resultado = 300 * kgPan + cantMedialunas * 30;
document.write(`El total a pagar es de $ ${resultado}`);