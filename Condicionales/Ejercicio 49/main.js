/*
Ejercicio 49
Construir un código que permita ingresar un número, si el número es mayor de 500, se
debe calcular y mostrar en pantalla el 18% de este.
*/

//Ingreso del codigo
let cod = parseInt(prompt('Ingrese el número'));

///condicional a cumplir

if(cod > 500){
    let porcentaje = 500*0.18;
    document.write(`El 18% de ${cod} es = ${porcentaje}`);
}else{
    document.write('El número es 500 o inferior. NO SE CALCULA PROCENTAJE')
}