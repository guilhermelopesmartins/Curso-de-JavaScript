function Contar (){
    var inicio = document.getElementById("txtInicio")
    var numInicio = Number(inicio.value)
    var fim = document.getElementById("txtFim")
    var numFim = Number(fim.value)
    var passo = document.getElementById("txtPasso")
    var numPasso = Number(passo.value)
    var res = document.querySelector("div#res")
    res.innerHTML =""
    
    if (numPasso == 0 || numPasso.lenght == 0) {
        numPasso = 1
        window.alert("Impossivel contar com 0 passos! Considerando PASSO igual a 1")
    }
    if (numInicio.lenght != 0 && numFim.lenght != 0) {
        for (let index = numInicio; index <= numFim; index += numPasso) {
            if (index > (numFim - numPasso)) { 
                res.innerHTML += `${index} \u{1F3C1}`
            }else{
                res.innerHTML += `${index}\u{1F449}` 
            }
        }
    }else{
        window.alert("Digite os valores pedidos para continuar...")
    }
}