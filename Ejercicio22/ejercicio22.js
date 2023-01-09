// Ejercicio 22
// Solicitar al usuario que ingrese la base y altura de un rectángulo, y calcular y mostrar por
// pantalla el área y perímetro del mismo
// area = base * altura
// perimetro = 2 * altura + 2 * base.

document.write("<h1>EJERCICIO 22</H1><br><br>");

let base = Number(prompt("Ingresa base"));
let altura = Number(prompt("Ingrese altura"));
let area = base * altura;
let perimetro = 2*altura + 2*base;
document.write(`Base: ${base}<br>`);
document.write(`Altura: ${altura}<br>`);
document.write(`Area: ${area}<br>`);
document.write(`Perimetro: ${per}<br>`)