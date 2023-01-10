// Ejercicio 27
// Hacer un programa que calcule el salario de un empleado, que descuenta el 20% de su
// salario bruto.

document.write("<h1>Ejercicio 27</h1><br>");

let salarioBruto = Number(prompt("Ingrese su salario"));
let salarioNeto = salarioBruto - salarioBruto * 0.2;

document.write(`Salario bruto: ${salarioBruto}<br>`);
document.write(`Salario neto: ${salarioNeto}`);
