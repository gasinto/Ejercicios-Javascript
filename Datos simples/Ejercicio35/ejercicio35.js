// Ejercicio 35
// Un alumno desea saber cuál será su calificación final en la materia de Algoritmos. Dicha calificación se compone de los siguientes porcentajes:
// a. 55% del promedio de sus tres calificaciones parciales.
// b. 30% de la calificación del examen final.
// c. 15% de la calificación de un trabajo final.

document.write("<h1>Ejercicio 34</h1><br><br>");

let promedio = Number(prompt("Ingrese el promedio de los tres parciales"));
let examen = Number(prompt(`Ingrese la calificacion del examen final`));
let trabajo = Number(prompt("Ingrese la calificacion del trabajo final"));

let notaFinal = promedio * 0.55 + examen * 0.3 + trabajo * 0.15;

document.write(`La calificación final es: ${notaFinal}`);