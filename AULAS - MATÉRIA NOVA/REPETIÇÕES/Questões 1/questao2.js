let soma = 0;
let contador = 0;
let idade;

idade = parseInt(prompt("Digite uma idade (0 ou negativa para sair):"));
while(idade > 0.0){
    soma += idade;
    contador++;
    idade = parseInt(prompt("Digite outra idade (0 ou negativa para sair):"));
}
console.log("Média de idades:", soma / contador);
