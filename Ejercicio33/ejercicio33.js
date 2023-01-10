// Ejercicio 33
// Un vendedor recibe un sueldo base más un 10% extra por comisión de sus ventas, el vendedor desea saber cuánto dinero obtendrá por concepto de comisiones por las tres ventas que realiza en el mes y el total que recibirá en el mes tomando en cuenta su sueldo base y comisiones.

document.write("<h1>Ejercicio 33</h1><br><br>");

let sueldo = Number(prompt("Ingrese el sueldo"));
let totalVenta = Number(prompt("Ingrese el total vendido del vendedor"));

let comision = totalVenta * 0.1;
sueldo += comision;

document.write(`Total a pagar ${sueldo}`);