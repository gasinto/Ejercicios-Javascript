/*
Ejercicio 47
<<<<<<< HEAD
Los alumnos de un curso se han dividido en dos grupos, A y B de acuerdo al sexo y el nombre. El grupo A 
está formado por mujeres con nombre anterior a la M y los hombres con nombre anterior a la N, y
el grupo B por el resto.
Escribir un programa que pregunte al usuario su nombre y sexo, y muestre por pantalla el
grupo que le corresponde.
*/

let nombre = prompt('Ingrese nombre')
let sexo = prompt('Ingrese Sexo: M - Mujer // H - Hombre')
nombre = nombre.toLowerCase()
sexo = sexo.toLowerCase()

if(sexo == 'h'){
    if(nombre < 'n'){
        alert('Pertenece al grupo A')
    }else{
        alert('Pertenece al grupo B')
    }
}
if(sexo == 'm'){
    if(nombre < 'm'){
        alert('Pertenece al grupo A')
    }else{
        alert('Pertenece al grupo B')
    }
}
=======
Los alumnos de un curso se han dividido en dos grupos, A y B de acuerdo al sexo y el nombre. El grupo A está 
formado por mujeres con nombre anterior a la M y los hombres con nombre anterior a la N, y el grupo B por 
el resto.
Escribir un programa que pregunte al usuario su nombre y sexo, y muestre por pantalla el grupo que le corresponde.
*/

>>>>>>> acc639a105058345b40c7949ff02ca45e6bccfab
