/*
Ejercicio 46
Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos ingresos iguales
<<<<<<< HEAD
o superiores a $1000 mensuales. Escribir un programa que pregunte al usuario su edad y sus 
ingresos mensuales y muestre por pantalla si el usuario tiene que tributar o no.
*/

=======
o superiores a $1000 mensuales. Escribir un programa que pregunte al usuario su edad y sus
ingresos mensuales y muestre por pantalla si el usuario tiene que tributar o no.
*/

//Ingreso de edad e ingresos mensuales
let edad = parseInt(prompt('Ingrese la edad'));
let sueldo = parseInt(prompt('Ingrese su sueldo mensual'));

//Verificación si tributa o no
if(edad > 16){
    document.write('Usted debe tributar.')
}else{
    document.write('Usted NO debe tributar.')
}
>>>>>>> acc639a105058345b40c7949ff02ca45e6bccfab
