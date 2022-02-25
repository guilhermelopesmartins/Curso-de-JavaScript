var agora = new Date() //Informações da data atual
var hora = agora.getHours  // Pega a hora atual
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12){
    console.log(`Bom dia!`)
} else if (hora <=18){
    console.log(`Boa tarde!`)
} else {
    console.log(`Boa noite!`)
}