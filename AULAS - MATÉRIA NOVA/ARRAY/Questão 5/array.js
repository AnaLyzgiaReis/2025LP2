let filmes = [
    {nome: "Filme 1", nota: 8},
    {nome: "Filme 2", nota: 7},
    {nome: "Filme 3", nota: 6},
    {nome: "Filme 4", nota: 9},
    {nome: "Filme 5", nota: 5},
    {nome: "Filme 6", nota: 8}
]

let opcao = ""

while(opcao !== "d"){
    opcao = prompt(
        "Escolha uma opção:\n" +
        "a) Imprimir dados de 1 filme\n" +
        "b) Avaliar um filme\n" +
        "c) Alterar dados de um filme\n" +
        "d) Finalizar e mostrar todos os filmes"
    )

    if(opcao === "a"){
        let indice = parseInt(prompt("Digite o índice do filme (0 a 5):"))
        alert("Filme: " + filmes[indice].nome + " | Nota: " + filmes[indice].nota)
    }
    else if(opcao === "b"){
        let indice = parseInt(prompt("Digite o índice do filme (0 a 5):"))
        let novaNota = parseFloat(prompt("Digite a nova nota:"))
        filmes[indice].nota = (filmes[indice].nota + novaNota) / 2
        alert("Nova média da nota: " + filmes[indice].nota)
    }
    else if(opcao === "c"){
        let indice = parseInt(prompt("Digite o índice do filme (0 a 5):"))
        let novoNome = prompt("Digite o novo nome do filme:")
        let novaNota = parseFloat(prompt("Digite a nova nota:"))
        filmes[indice].nome = novoNome
        filmes[indice].nota = novaNota
        alert("Filme atualizado com sucesso!")
    }
    else if(opcao === "d"){
        let resultado = "Lista de filmes:\n"
        for(let i = 0; i < filmes.length; i++){
            resultado += i + " -> " + filmes[i].nome + " | Nota: " + filmes[i].nota + "\n"
        }
        alert(resultado)
    }
}
