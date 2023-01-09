// Ejercicio 17
// Confeccionar un programa que solicite el ingreso del valor radio (r) de un circulo y con dicho valor calcule la superficie del círculo, la circunferencia (perímetro) y el volumen de la esfera.
// Superficie = π r2
// Perímetro = 2π r

let radio = Number(prompt("Ingrese el radio del circulo"));
let superficie = 3.1415 * radio**2;
superficie = superficie.toFixed(2);
let perimetro = 2*3.1415 * radio;
perimetro = perimetro.toFixed(2);

document.write(`Radio = ${radio}<br>`);
document.write(`Superficie = ${superficie}<br>`);
document.write(`Perímetro = ${perimetro}`);