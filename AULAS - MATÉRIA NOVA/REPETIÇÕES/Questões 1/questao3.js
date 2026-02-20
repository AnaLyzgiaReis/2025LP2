let soma = 0;
let numero;

numero = parseInt(prompt("Digite um número (0 para sair):"));
while(numero !== 0){
    soma += numero;
    numero = parseInt(prompt("Digite outro número (0 para sair):"));
}
console.log("Somatório:", soma);
