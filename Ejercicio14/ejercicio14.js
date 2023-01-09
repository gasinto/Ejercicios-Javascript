// Ejercicio 14
// Conociendo la cantidad de tarros de pintura que existe en un depósito de una pintureria y sabiendo que el 50% son tarros de 1Lt, el 30% tarros de 4Lts, y el resto de tarros de 20Lts. Determinar la cantidad de tarros de 1Lt, 4Lts y 20Lts.

let tarros = Number(prompt("Cantidad de tarros de pintura"));
let tarros1l = tarros * 0.5;
let tarros4l = tarros * 0.3;
let tarros20l = tarros - (tarros1l + tarros4l);
document.write(`Tarros totales = ${tarros}<br>`);
document.write(`Tarros de 1Lt = ${tarros1l}<br>`);
document.write(`Tarros de 4Lt = ${tarros4l}<br>`);
document.write(`Tarros de 20Lt = ${tarros20l}`);