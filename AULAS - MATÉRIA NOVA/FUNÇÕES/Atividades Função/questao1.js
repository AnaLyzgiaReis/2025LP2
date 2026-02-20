function menu(){
let vendas = []
let despesas = []

function inserirVenda(){
    let v = parseFloat(prompt("Digite o valor da venda:"))
    if(!isNaN(v) && v > 0){
        vendas.push(v)
        alert("Venda registrada com sucesso! (●'◡'●)")
    } else {
        alert("Valor inválido! ~_~")
    }
}

function statusVendas(){
    let num = vendas.length
    let total = vendas.reduce((a,b)=>a+b,0)
    alert(`Número de vendas: ${num}\nTotal vendido: R$ ${total.toFixed(2)}`)
}

function inserirDespesa(){
    let d = parseFloat(prompt("Digite o valor da despesa:"))
    if(!isNaN(d) && d > 0){
        despesas.push(d)
        alert("Despesa registrada com sucesso! (*/ω＼*)")
    } else {
        alert("Valor inválido! ~_~")
    }
}

function totalDespesas(){
    let total = despesas.reduce((a,b)=>a+b,0)
    alert(`Total de despesas do dia: R$ ${total.toFixed(2)}`)
}

let op
do{
    op = prompt(`Gerenciador de Vendas e Despesas (✿◡‿◡)
    a) Inserir Valor de uma Venda
    b) Ver status das vendas do dia
    c) Inserir Valor de uma Despesa
    d) Ver total de despesas do dia
    e) Encerrar`)

    switch(op){
        case 'a': inserirVenda()
        break
        case 'b': statusVendas()
        break
        case 'c': inserirDespesa()
        break
        case 'd': totalDespesas()
        break
        case 'e': alert("Encerrando... obrigada por usar! (´▽`ʃ♡ƪ)")
        break
        default: alert("Opção inválida, tente de novo! ƪ(˘⌣˘)ʃ")
    }
}while(op != 'e')

}

menu()
