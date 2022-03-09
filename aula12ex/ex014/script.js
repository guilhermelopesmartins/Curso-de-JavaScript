function carregar (){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        img.src = 'day.jpg'
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora < 18){
        img.src = 'afternoon.jpg'
        document.body.style.background = '#b9846f'
    }else{
        img.src = 'night.jpg'
        document.body.style.background = '#515154'
    }
}
