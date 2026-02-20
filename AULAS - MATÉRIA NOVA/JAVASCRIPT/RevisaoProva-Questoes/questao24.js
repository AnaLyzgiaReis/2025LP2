function sorteiaPoder() {
  return Math.floor(Math.random() * 10) + 1
}

let poke1 = {
  id: 1,
  nome: prompt("Digite o nome do primeiro pokemão:"),
  tipo: prompt("Digite o tipo do primeiro pokemão (agua/fogo/terra):"),
  poder: sorteiaPoder()
}

let poke2 = {
  id: 2,
  nome: prompt("Digite o nome do segundo pokemão:"),
  tipo: prompt("Digite o tipo do segundo pokemão (agua/fogo/terra):"),
  poder: sorteiaPoder()
}

// vantagem elemental
if (poke1.tipo === "agua" && poke2.tipo === "fogo") poke1.poder += 3
if (poke1.tipo === "fogo" && poke2.tipo === "terra") poke1.poder += 3
if (poke1.tipo === "terra" && poke2.tipo === "agua") poke1.poder += 3

if (poke2.tipo === "agua" && poke1.tipo === "fogo") poke2.poder += 3
if (poke2.tipo === "fogo" && poke1.tipo === "terra") poke2.poder += 3
if (poke2.tipo === "terra" && poke1.tipo === "agua") poke2.poder += 3

console.log(poke1.nome + " (Poder: " + poke1.poder + ") VS " + poke2.nome + " (Poder: " + poke2.poder + ")")

if (poke1.poder > poke2.poder) {
  alert("Vencedor: " + poke1.nome)
} else if (poke2.poder > poke1.poder) {
  alert("Vencedor: " + poke2.nome)
} else {
  alert("Empate!")
}
