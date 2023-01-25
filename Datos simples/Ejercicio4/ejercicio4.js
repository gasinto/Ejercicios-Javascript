// Ejercicio 4
// Escribir un programa que pregunte al usuario la cantidad de horas que trabajó en la jornada y el coste por hora. Mostrar por pantalla la paga que le corresponde en el día.

let cantHoras = parseInt(prompt("Cantidad de horas"));
let costHoras = parseInt(prompt("Coste por hora"));
let pago = costHoras * cantHoras;
document.write(`Hay que pagar: ${pago}`)