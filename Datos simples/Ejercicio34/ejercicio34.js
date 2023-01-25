// Ejercicio 34
// Una tienda ofrece un descuento del 15% sobre el total de la compra y un cliente desea saber cuánto deberá pagar finalmente por su compra.

document.write("<h1>Ejercicio 34</h1><br><br>");

let compra = Number(prompt("Ingrese el total de la compra"));
compra = (compra - compra * 0.15).toFixed(2);

document.write(`El cliente tiene que abonar: $${compra}`);