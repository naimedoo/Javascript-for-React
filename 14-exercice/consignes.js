/*
* À l'aide de la méthode filter, récupérer les notes supérieures à 10
*/
let nombres = [12, 6, 3, 4, 9, 15, 20];

// Write your code here

function nombreSup(nombre) {
    return nombre > 10
}
let nombresFiltres = nombres.filter(nombreSup)
console.log(nombresFiltres)