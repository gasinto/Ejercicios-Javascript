// Ejercicio 29
// Mostrar el área y perímetro de un rombo.
// Perímetro = 4L
// Área = (Dxd)/2  

// NOTA: D = Diagonal mayor, d = Diagonal menor

document.write("<h1>Ejercicio 29</h1><br>");

let lado = parseFloat(prompt("Ingrese la medida de los lados"));
let diagonarMayor = parseFloat(prompt("Ingrese la medida de la diagonal mayor"));
let diagonalMenor = parseFloat(prompt("Ingrese la medida de la diagonal menor"));

let perimetro = (4* lado).toFixed(2);
let area = ((diagonarMayor*diagonalMenor)/2).toFixed(2);

document.write(`El perimetro del rombo es de: ${perimetro}<br>`);
document.write(`El area del rombo es de: ${area}`);