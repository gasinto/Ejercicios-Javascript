// Ejercicio 9
// Confeccionar un programa que ingrese una medida en ‘pies’ y la exhiba convertida a yardas, pulgadas, centímetros y metros.
// NOTA: 1 pie = 12 pulgadas, 1 yarda = 3 pies, 1 pulgada = 2.54cms.

let pies = parseFloat(prompt("Ingrese medida en PIES"));
let yardas = (pies*1)/3;
let pulgadas = (pies*12)/1;
let centimetros = (pies*2.54)/1;
let metros = (centimetros*1)/100;

document.write(`${pies} pies equivalen a: <br>`);
document.write(`${yardas} yardas<br>`);
document.write(`${pulgadas} pulgadas<br>`);
document.write(`${centimetros} centimetros<br>`);
document.write(`${metros} metros`);