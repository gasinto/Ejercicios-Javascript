// Ejercicio 15
//  El precio para un vuelo es de $8800 en clase turista y se aplica un incremento del 30% en primera clase. Se ingresan la cantidad de pasajes vendidos de clase turista y de primera clase. Obtener la recaudación total del vuelo.

let cantTurista = Number(prompt("Cantidad de pasajes de clase turista"));
let cantPrimera = Number(prompt("Cantidad de pasajes de primera clase"));

let total = cantTurista * 8000 + cantPrimera * (8000+8000*0.3);

document.write(`total recaudado = ${total}`);