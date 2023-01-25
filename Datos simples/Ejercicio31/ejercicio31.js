// Ejercicio 31
// Mostrar el área y perímetro de un paralelogramo.
// area = base x altura
// perimetro = 2Lado + 2Base

document.write("<h1>Ejercicio 31</h1><br><br>");

let base = Number(prompt( "Ingrese la medida de la base en cm"));
let altura = Number(prompt("Ingrese la medida de la altura en cm"));
let lado = Number(prompt("Ingrese la medida de los lados en cm"));

let area = (base*altura).toFixed(2);
let perimetro = (2*lado + 2*base).toFixed(2);

document.write(`<h2>Paralelogramo</h2><br>`);
document.write(`Perimetro: ${perimetro}cm<br>`);
document.write(`Area: ${area}cm2`);