/*
Ejercicio 40
Escribí un código que pida un string mediante un prompt, lo almacene en una variable y cumpla con las 
siguientes condiciones:

-  Si el string es “alerta”, que imprima una alerta en pantalla que diga “Soy una alerta”
- Si el string es “consola”, que imprima en consola “Soy un mensaje en la consola”
- En caso de que no sea ninguno de los casos anteriores, que se imprima una alerta y también en 
  consola “Me muestro en ambos lados”
*/

document.write('<h1>Ejercicio 40</h1><br><br><br>')

//Solicitamos el ingreso de las plabras
let message = prompt('Escriba "alerta, consola u otra palabra"')

//Realizamos el condicional
if(message === "alerta"){
    alert('Soy una alerta')
}
else if(message === "consola"){
    console.log('Soy un mensaje en la consola')
}
else{
    alert('Me muestro en ambos lados')
    console.log('Me muestro en ambos lados')
}