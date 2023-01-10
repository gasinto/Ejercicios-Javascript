// Ejercicio 37
// Realizar un algoritmo que lea un número y que muestre su raíz cuadrada y su raíz cúbica.

document.write("<h1>Ejercicio 37</h1><br><br>");

let num = Number(prompt("Ingrese un número"));

raizCuadrada = (Math.sqrt(num)).toFixed(2);
raizCubica = (Math.pow(num,1/3)).toFixed(2);

document.write(`Número: ${num}<br>`);
document.write(`Raiz cuadra: ${raizCuadrada}<br>`);
document.write(`Raiz cúbica: ${raizCubica}`)