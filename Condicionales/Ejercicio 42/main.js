/*
Ejercicio 42
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
}