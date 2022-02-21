/**
 * Convertir des heures en minutes
 * Vous pouvez utiliser les arguments depuis le terminal ou avec prompt.
 * l'utilisateur saisit des heures
 * l'utilisateur saisit des minutes
 * convertir les heures et minutes en minutes
 * exemple: 1h30 -> 90minutes
 */


// Write your code here

let prompt = require("prompt")
prompt.start();

prompt.get("heures",function(err, result) {

    let data = result.heures.split("h")
    let minutes = parseInt(data[1])
    let heures  = parseInt(data[0] * 60)
    console.log(data)
    console.log(heures + minutes)
})