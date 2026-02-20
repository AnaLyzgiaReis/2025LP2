let valor, maior, menor;
let i = 0;

maior = Number.NEGATIVE_INFINITY;
menor = Number.POSITIVE_INFINITY;
while(i < 10){
    valor = parseInt(prompt("Digite um valor:"));
    if(valor > maior) maior = valor;
    if(valor < menor) menor = valor;
    i++;
}
console.log("Maior:", maior, "Menor:", menor);
