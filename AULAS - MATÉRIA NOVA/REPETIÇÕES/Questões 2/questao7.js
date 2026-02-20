let soma = 0, sub = 0, mult = 0, div = 0;
let opcao;

do {
  opcao = prompt(
    "Escolha uma opção:\n" +
    "a) SOMA\n" +
    "b) SUBTRAÇÃO\n" +
    "c) MULTIPLICAÇÃO\n" +
    "d) DIVISÃO\n" +
    "e) SAIR"
  ).toLowerCase();

  if (opcao === "a") {
    let n1 = parseFloat(prompt("Digite o primeiro número:"));
    let n2 = parseFloat(prompt("Digite o segundo número:"));
    console.log(`Resultado da soma: ${n1 + n2}`);
    soma++;
  } 
  else if (opcao === "b") {
    let n1 = parseFloat(prompt("Digite o primeiro número:"));
    let n2 = parseFloat(prompt("Digite o segundo número:"));
    console.log(`Resultado da subtração: ${n1 - n2}`);
    sub++;
  } 
  else if (opcao === "c") {
    let n1 = parseFloat(prompt("Digite o primeiro número:"));
    let n2 = parseFloat(prompt("Digite o segundo número:"));
    console.log(`Resultado da multiplicação: ${n1 * n2}`);
    mult++;
  } 
  else if (opcao === "d") {
    let n1 = parseFloat(prompt("Digite o primeiro número:"));
    let n2 = parseFloat(prompt("Digite o segundo número:"));
    if (n2 === 0) {
      console.log("Erro: divisão por zero não é permitida!");
    } else {
      console.log(`Resultado da divisão: ${n1 / n2}`);
    }
    div++;
  }

} while (opcao !== "e");

console.log("Resumo das operações realizadas:");
console.log(`Somas: ${soma}`);
console.log(`Subtrações: ${sub}`);
console.log(`Multiplicações: ${mult}`);
console.log(`Divisões: ${div}`);
