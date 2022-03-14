function Calcular (){
    let tabela = document.getElementById('tabela')
    let num = document.getElementById('txtNum')
    num = Number(num.value)
    
    if (num.lenght == 0){
        window.alert('Digite um valor para fazer a tabuada.')
    } else {
        for(let i=0;i<10;i++){
            let item = document.createElement('option')
            item.text = `${num} X ${i} = ${num*i}`
            tabela.appendChild(item)
        }
    }
}