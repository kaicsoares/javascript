function contar() {
    var ini = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var passo = window.document.getElementById('txtp')
    var res = window.document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel Contarr!'
        window.alert('[ERRO] Faltam Dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <=0) {
            window.alert('Passo Inválido! Considerando PASSO 1')
            p = 1
        }

        // CONTAGEM CRESCENTE
        if(i < f){
            for(var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449} ` // <- CÓDIGO DE EMOJI
            }
        } else {
        // CONTAGEM DESCRESCENTE
            for(var c = i; c >= f; c -= p)
                res.innerHTML += ` ${c} \u{1F449}` // <- CÓDIGO DE EMOJI
        }      
        res.innerHTML += `\u{1F3C1}`
    }    
}