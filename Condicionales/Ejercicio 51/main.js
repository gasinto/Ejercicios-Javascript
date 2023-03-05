/* 
Ejercicio 51
Diseñe un algoritmo que lea un número de tres cifras y determine si es o no capicúa.
*/

let numero = parseInt(prompt('Ingrese un numero de 3 cifras'));

let unidad = numero%10;
let decena = (numero/100 )

unidad = parseInt(unidad)
decena = parseInt(decena)
//centena = parseInt(centena)

// let num2 = unidad*100 + decena*10 + centena

document.write(`${unidad}<br>`)
document.write(`${decena}<br>`)
// document.write(`${centena}<br><br>`)
// document.write(`${numero}  ${num2}`)

// if(numero === num2){
//     document.write('ES CAPICUA')
// }else{
//     document.write('NO ES CAPICUA')
// }