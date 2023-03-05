//Ejercicio 43
//Escribir un programa que pida al usuario un número entero y muestre por pantalla si es par o impar.

//Ingreso de número
let num1 = parseInt(prompt('Ingrese un número'));

//Verificación si el número ingresado es par o inpar
if(num1%2==0){
    document.write('El número es PAR');
}
else{
    document.write('El número es IMPAR');
}