// Ejercicio 18
// Escribir un programa que calcule cuántos litros de combustible consumió un automóvil. El usuario ingresará una cantidad de litros de combustible cargados en la estación y una cantidad de kilómetros recorridos, después, el programa calculará el consumo (km/lt) y se lo mostrará al usuario.

let litros = Number(prompt("Litros cargados"));
let km = Number(prompt("Kilómetros recorridos"));
let consumo = km/litros;
document.write(`Se consumieeron ${consumo} litros de combustible.`)