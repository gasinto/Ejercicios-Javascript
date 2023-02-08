/*
Ejercicio 42
Escribir un programa que pregunte al usuario su edad y muestre por pantalla si es mayor de edad o no.
*/

//Solicitamos el ingreso de la edad

let edad = prompt('Ingrese su edad')
edad = parseInt(edad)

//verificamos si es mayor o menos de edad
if(edad <18){
    console.log('Usted es menor de edad')
}else{
    console.log('Usted es mayor de edad')
}