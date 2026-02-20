function soma (n1, n2){
    return n1+n2
}
function sub (d, e){
    return d-e
}
function mult(r, t){
    return r*t
}
function divisao (a, b){
    if(b != 0){
        return a/b
    }else{
        alert("Erro, vc tentou dividir por zero! :0")
        return
    }
}

function oper(num1, num2, ope){
    let res 
    switch(ope){
        case '1': res = soma(num1, num2)
        break
        case '2': res = sub(num1, num2)
        break
        case '3': res = mult(num1, num2)
        break
        case '4': res = divisao(num1, num2)
        break
    }
    return res
}
function menu(){
    let op = 0 
do {
    op = prompt(`Calculadora :3
        1 soma
        2 subtração
        3 multiplicação
        4 divisão
        0 sair`)

        if (op >=1 && op <5){
                let n1 = parseFloat(prompt("Número 1"))
                let n2 = parseFloat(prompt("Número 2"))
                let resultado = oper (n1, n2, op)
                alert("o result eh: "+ resultado)  
                if(resultado)
                    alert("Seu resultado é: "+ resultado)
        }
        
}while(op != 0)





}

menu ()

