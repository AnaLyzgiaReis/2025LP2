let livro1 = {
  titulo: prompt("Digite o título do primeiro livro:"),
  autor: prompt("Digite o autor do primeiro livro:"),
  ano: Number(prompt("Digite o ano de publicação do primeiro livro:")),
  paginas: Number(prompt("Digite o número de páginas do primeiro livro:")),
  nacionalidade: prompt("O autor é brasileiro? (sim/não)")
}

let livro2 = {
  titulo: prompt("Digite o título do segundo livro:"),
  autor: prompt("Digite o autor do segundo livro:"),
  ano: Number(prompt("Digite o ano de publicação do segundo livro:")),
  paginas: Number(prompt("Digite o número de páginas do segundo livro:")),
  nacionalidade: prompt("O autor é brasileiro? (sim/não)")
}

("Livro mais antigo: " + (livro1.ano < livro2.ano ? livro1.titulo : livro2.titulo))
alert("Livro com mais páginas: " + (livro1.paginas > livro2.paginas ? livro1.titulo : livro2.titulo))

if (livro1.nacionalidade === "sim") {
  alert("Livro com autor brasileiro: " + livro1.titulo)
} 
if (livro2.nacionalidade === "sim") {
  alert("Livro com autor brasileiro: " + livro2.titulo)
}
