// Ejercicio 21
// Un colegio desea saber qué porcentaje de niños y qué porcentaje de niñas hay en el curso
// actual. Diseñar un algoritmo para este propósito. Recuerda que para calcular el porcentaje
// puedes hacer una regla de 3 simple. El programa debe solicitar al usuario que ingrese la
// cantidad total de niños, y la cantidad total de niñas que hay en el curso.

document.write("EJERCICIO 21<br><br>");

let ninio = parseInt(prompt("Cantidad de niños"));
let ninia = parseInt(prompt("Cantidad de niñas"));

let total = ninio + ninia;
let porcentajeNinio = (ninio * 100 / total).toFixed(0);
let porcentajeNinia = (ninia * 100 / total).toFixed(0);

document.write(`Alumnos totales: ${total}<br>`);
document.write(`Niños: ${ninio} >>> ${porcentajeNinio}%<br>`);
document.write(`Niñas: ${ninia} >>> ${porcentajeNinia}%<br>`);
