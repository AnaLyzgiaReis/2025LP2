const precos = [10, 25, 7, 40, 15]

let maior = precos[0]
let indice = 0

for(let i = 1; i < precos.length; i++){
    if(precos[i] > maior){
        maior = precos[i]
        indice = i
    }
}

console.log("Índice do produto mais caro:", indice)
console.log("Preço do produto mais caro:", maior)
