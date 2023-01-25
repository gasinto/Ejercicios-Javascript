// Ejercicio 24
// A partir de una conocida cantidad de días que el usuario ingresa a través del teclado, escriba
// un programa para convertir los días en horas, en minutos y en segundos. Por ejemplo
// 1 día = 24 horas = 1440 minutos = 86400 segundos

document.write("<h1>Ejercicio 42</h1><br><br>");

let dias = parseInt(prompt("Ingrese cantidad de días"));
let horas = dias * 24;
let minutos = dias * 1440;
let segundos = dias * 86400;

document.write(`${dias} días equivalen a >>><br>`);
document.write(`${horas} horas<br>`);
document.write(`${minutos} minutos<br>`);
document.write(`${segundos} segundos`);