let salario, soma;

soma = 0;
salario = parseFloat(prompt("Digite o salário (0 para encerrar):"));
while(salario !== 0.0){
    soma += salario;
    salario = parseFloat(prompt("Digite o salário (0 para encerrar):"));
}
console.log("Total da família:", soma);

