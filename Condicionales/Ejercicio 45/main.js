/*
Ejercicio 45
Una farmacia vende algunos artículos sin descuentos y a otros con descuentos del 20%. Confeccionar un programa 
que recibiendo el precio original y un código que indica si es o no descuento, informe el precio final
NOTA: 0 aplica descuento y 1 no aplica descuento.
*/

//Ingreso de precios y selección de descuento
let precio = parseFloat(prompt('Ingrese el precio del producto'));
let codigo = parseInt(prompt('0- Descuento de 20%\n1- Sin descuento'))
precio = precio.toFixed(2);

//calculo de descuento según corresponda
if(codigo == 0){
    let total = precio - precio*0.2;
    total = total.toFixed(2);
    document.write(`Precio: ${precio}<br>`);
    document.write(`Precio con 20% de descuento: ${total}`);
}else{
    document.write(`Precio: ${precio}<br>`);
    document.write(`Precio con 20% de descuento: NO TIENE`);
}