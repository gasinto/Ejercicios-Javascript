/*
Ejercicio 42
<<<<<<< HEAD
Escribir un programa que pida al usuario dos números y muestre por pantalla su división. Si el divisor es cero, 
el programa debe mostrar error.
*/

//Ingreso de números
let num1 = parseInt(prompt('Ingrese número 1'));
let num2 = parseInt(prompt('Ingrese número 2'));

//condicionmal Si
//Si el divisor es cero, muestra error

if(num2 === 0){
    alert('El divisor es 0. NO SE PUEDE DIVIDIR POR CERO');
}
else{
    document.write(num1/num2);
=======
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
>>>>>>> acc639a105058345b40c7949ff02ca45e6bccfab
}