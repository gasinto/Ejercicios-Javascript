// Ejercicio 16
// Confeccionar un programa que ingrese n valor expresado en Kibibyte (KiB) y lo informe expresado en: TiB, GiB, MiB, con leyendas aclaratorias.
// NOTA: 1Mib = 1024KiB, 1GiB = 1024Mib, 1TiB = 1024GiB.

let kib = Number(prompt("Cantidad de Kibibyte (KiB"));
let mib = kib/1024;
let gib = mib/1024;
let tib = gib/1024;
document.write(`${kib} Kibibytes equivalen a: <br>`);
document.write(`${mib} Megibytes<br>`);
document.write(`${gib} Gigibytes<br>`);
document.write(`${tib} Teribytes`);