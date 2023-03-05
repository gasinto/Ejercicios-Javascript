/*
Ejercicio 48
Un hombre desea saber si su sueldo es mayor al sueldo mínimo, el programa le pedirá 
al usuario su sueldo actual y el sueldo mínimo. Si el sueldo es mayor al mínimo 
se debe mostrar un mensaje por pantalla indicándolo.
*/

//Ingreso de informacion
let minimo = parseInt(prompt('Ingrese el sueldo minimo'))
let sueldo = parseInt(prompt('Ingrese el sueldo'))

//Condicionales para verificar sueldos
if(sueldo < minimo){
    alert('Su sueldo es menor al minimo establecido')
}else{
    alert('Su sueldo es mayor al establecido')
}