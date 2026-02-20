let produto = {
  nome: prompt("Digite o nome do produto:"),
  preco: Number(prompt("Digite o preço do produto:")),
  emEstoque: prompt("O produto está em estoque? (sim/não)") === "sim"
}

if (produto.emEstoque) {
  alert("Produto disponível")
} else {
  alert("Produto indisponível")
}
