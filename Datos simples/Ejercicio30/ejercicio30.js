// Ejercicio 30
// Mostrar el área y perímetro de un hexágono.
// Perímetro = 6. LADO = 6L
// Area = (perímetro/apotema)/2
// Apotema = raíz cuadrada(lado^2 + (lado/2)^2)

document.write("<h1>Ejercicio 30</h1><br><br>");

let lado = parseFloat(prompt("Ingrese el valor de los lados en cm"));

let perimetro = (6 * lado).toFixed(2);
let apotema = (Math.sqrt(lado**2 + (lado/2)**2)).toFixed(2);
let area = ((perimetro/apotema)/2).toFixed(2);

document.write(`Rombo<br>`);
document.write(`Perimetro: ${perimetro}cm<br>`);
document.write(`Area: ${area}cm2`)