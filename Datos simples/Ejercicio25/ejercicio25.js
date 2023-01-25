// Ejercicio 25
// Crear un programa que solicite al usuario que ingrese el precio de un producto al inicio del
// año, y el precio del mismo producto al finalizar el año. El programa debe calcular cuál fue el
// porcentaje de aumento que tuvo ese producto en el año y mostrarlo por pantalla.

document.write("<h1>Ejercicio 25</h1><br><br>");

let priceInitial = Number(prompt("Ingrese precio"));
let priceFinal = Number(prompt("Ingrese precio actual"));
let diferencia = priceFinal - priceInitial;
let procentaje = ((diferencia*100)/priceInitial).toFixed(2);

document.write(`El porcentaje de aumento es de ${procentaje}%`);