/*
Ejercicio 50
Se pide ingresar una letra del alfabeto y mostrar si dicha letra es vocal o consonante.
*/
//ingreso de datos
let letra = prompt('Ingrese una letra');

//cumplimiento de condicional
if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
    document.write('La letra ingresada es una VOCAL');
}else{
    document.write('La letra ingresada es una CONSONANTE');
}