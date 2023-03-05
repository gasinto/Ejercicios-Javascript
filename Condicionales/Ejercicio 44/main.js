/*
Ejercicio 44
Una pizzería vende empanadas por unidad o por docena. La docena cuesta $300, pero si se compra 
individualmente, se cobra $30 la unidad. Si se compran más empanadas que no se agrupen en
docenas, las adicionales se cobran por unidad. Indicar el precio total a abonar.
*/

//Ingreso de cantidad de empanadas compradas
let empanadas = parseInt(prompt('¿Cuantas empanadas vendio?'));

//Sacamos las docenas y separamos las empanadas sueltas
let docena = empanadas / 12;
docena = docena.toFixed(0);
let empanadasSueltas = empanadas%12;

//Sacamos el valor a pagar según corresponda

let total = docena * 300 + empanadasSueltas * 30;

document.write(`El total a pagar es de: ${total}`);