// Ejercicio 20
// Ingrese un número de tres cifras y muestra la unidad, decena y la centena.
// Por ejemplo, si el número ingresado por pantalla es 123 el programa debe mostrar:
// CENTENA: 1
// DECENA: 2
// UNIDAD: 3

document.write("<h1>Ejercicio 20</h1><br><br>");

let num = parseInt(prompt("Ingrese un numero de 3 cifras"));

let unidad = num % 10;
let decena = (num%100-unidad)/10;
let centena = ((num%1000-decena)/100).toFixed(0);

document.write(`Número: ${num}<br><br>`);
document.write(`Centena: ${centena}<br>`);
document.write(`Decena: ${decena}<br>`);
document.write(`Unidad: ${unidad}`);
