let num = []
let cont = 0 // Contador para a criar a lista 'num'
function adicionar(){
    let txtValor = document.getElementById('txtNum')
    let valor = Number(txtValor.value)
    let tabela = document.getElementById('tabela')
    let respostas = document.getElementById('respostas')

    // Verifica se algum valor foi digitado
    if (txtValor.value.length == 0)
        return window.alert("Digite um valor antes de adiciona-lo")

    // Verifica se algum se o número se repete ou está fora do pedido
    for (let pos in num+1) {
        if (num[pos] == valor || valor < 1 || valor > 100){
            return window.alert('Valor inválido ou já encontrado na lista')
        }
    }

    respostas.innerHTML = ""

    num[cont] = valor
    // Cria um item com o novo valor digitado para a tabela
    let item = document.createElement('option')
    item.text = `Valor ${num[cont]} adicionado a Lista`
    // Adiciona novo elemento a Lista(select) HTML
    tabela.appendChild(item) 
    // Limpa a caixa de texto sempre que é adicionado um Valor
    txtValor.value = null 

    cont++
}

function mostrarAnalise(){
    let respostas = document.getElementById('respostas')
    // Verifica se há valores na lista para mostrar as respostas
    if(num.length == 0)
        return respostas.innerHTML = `Não há números na lista`

    respostas.innerHTML = `Ao todo temos ${num.length} números cadastrados`
    respostas.innerHTML += `<p/>O maior valor informado foi ${Math.max.apply(null, num)}</p>`
    respostas.innerHTML += `<p/>O menor valor informado foi ${Math.min.apply(null, num)}</p>`
    // Calcula a soma de todos os valores da lista
    let soma = 0
    for (i in num) {
        soma += num[i]
    }
    respostas.innerHTML += `<p/>Somando todos os valores, temos ${soma}</p>`
    let media  = soma/num.length
    respostas.innerHTML += `<p/>A média dos valores digitados é ${media}</p>`
}