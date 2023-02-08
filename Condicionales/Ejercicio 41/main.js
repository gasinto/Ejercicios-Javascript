/*
Ejercicio 41
Escribí un código mediante el uso de condicionales que defina una variable “edad” y que cumpla las siguientes condiciones:

- Si la edad es menor a 20 y menor a 13 , imprima por consola “Soy un niño”
- Si la edad es menor a 20 y mayor o igual a 13, imprima por consola “Soy un adolescente”
- Si la edad es mayor o igual a 20 y menor a 50 , imprima por consola “Soy un adulto”
- Si la edad es mayor a 50 , imprima por consola “Soy un adulto mayor”.
*/

document.write('<h1>Ejercicio 41<br><br><br>')

//Ingreso de edad por pantalla
let edad = prompt('Ingrese la edad')
//Pasamos el contenido de EDAD a entero
edad = parseInt(edad)

//Planteo de condicionales
if(edad < 13){
    document.write('<h3>Soy un niño</h3>')
}
else if(edad >= 13 && edad < 20){
    document.write('<h3>Soy un adolescente</h3>')
}
else if(edad >= 20 && edad < 50){
    document.write('<h3>Soy un adulto</h3>')
}
else if(edad >= 50){
    document.write('<h3>Soy un adulto mayor</h3>')
}