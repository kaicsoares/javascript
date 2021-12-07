function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data= new Date()
    var hora = data.getHours()


    msg.innerHTML = `Agora são ${hora} horas.` 
    if(hora >= 0 && hora < 12) {
        // BOM DIA!!
        img.src = 'manha-250.jpg'
        document.body.style.background = 'rgb(248, 212, 128)'

    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!!
        img.src = 'tarde-250.jpg'
        document.body.style.background = 'rgb(153, 96, 61)'
    } else {
        // BOA NOITE!!
        img.src = 'noite-250.jpg'
        document.body.style.background = 'rgb(30, 66, 92)' 
    }  
}
