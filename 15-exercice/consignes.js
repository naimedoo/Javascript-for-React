/*
* À l'aide de la méthode filter, récupérer les prenoms qui commencent par 'Ma'
*/
let prenoms = ["Marie", "Antoine", "Sarah", "Mandax"];

 
// Write your code here
let prenomMa = prenoms.filter(function(prenom){
    return prenom.startsWith('Ma')
})
console.log(prenomMa)