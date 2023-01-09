// Ejercicio 26
// Calcular el cambio de monedas en dólares y euros al ingresar cierta cantidad de dinero en
// pesos.

document.write("<h1>Ejercicio 26</h1>");

let dinero = Number(prompt("Ingrese el dinero a convertir"));
let pDolar = Number(prompt("Ingrese el valor del dolar"));
let pEuro = Number(prompt("Ingrese el valor del euro"));
let dolar = (dinero / pDolar).toFixed(2);
let euro = (dinero / pEuro).toFixed(2);

document.write(`$${dinero} equivalen a  >>><br>`);
document.write(`${dolar} dolares <br>`);
document.write(`${euro} euros`);