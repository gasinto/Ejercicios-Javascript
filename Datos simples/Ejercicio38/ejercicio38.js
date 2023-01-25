// Ejercicio 38
// Dado un número de dos cifras, diseñe un algoritmo que permita obtener el número invertido. Ejemplo, si se introduce 23 que muestre 32.

 document.write("<h1>Ejercicio 38</h1><br><br>")

 let number = prompt('Ingrese un número')
 number = parseInt(number)

 document.write(`Número sin invertir: ${number}<br>`)

 let aux = number%10
 number = number/10
 number = number.toFixed(0)

document.write(`Número invertido: ${aux}${number}`)

