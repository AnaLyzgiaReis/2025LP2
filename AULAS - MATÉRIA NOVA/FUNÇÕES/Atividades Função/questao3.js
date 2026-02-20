function menu(){
    let livros = []

    function inserirLivro(){
        let nome = prompt("Digite o nome do livro:")
        let autor = prompt("Digite o autor:")
        let ano = parseInt(prompt("Digite o ano de publicação:"))
        let avaliacao = parseFloat(prompt("Digite a avaliação (0 a 10):"))
        livros.push({nome:nome, autor:autor, ano:ano, avaliacao:avaliacao})
        alert("Livro cadastrado com sucesso!")
    }

    function imprimirNomes(){
        if(livros.length == 0){
            alert("Nenhum livro cadastrado ainda!")
        }else{
            let lista = ""
            for(let i=0; i<livros.length; i++){
                lista += (i+1)+". "+livros[i].nome+"\\n"
            }
            alert("Livros cadastrados:\\n"+lista)
        }
    }

    function imprimirLivro(){
        let idx = parseInt(prompt("Digite o número do livro (1 até "+livros.length+"):"))-1
        if(livros[idx]){
            let l = livros[idx]
            alert("Nome: "+l.nome+"\\nAutor: "+l.autor+"\\nAno: "+l.ano+"\\nAvaliação: "+l.avaliacao)
        }else{
            alert("Livro não encontrado!")
        }
    }

    function imprimirPorAutor(){
        let autor = prompt("Digite o nome do autor:")
        let lista = ""
        for(let i=0; i<livros.length; i++){
            if(livros[i].autor.toLowerCase() == autor.toLowerCase()){
                lista += (i+1)+". "+livros[i].nome+" ("+livros[i].ano+") - Avaliação: "+livros[i].avaliacao+"\\n"
            }
        }
        if(lista==""){
            alert("Nenhum livro desse autor encontrado!")
        }else{
            alert("Livros do autor "+autor+":\\n"+lista)
        }
    }

    let op
    do{
        op = prompt(`Coleção de Livros (∩^o^)⊃━☆
        a) Inserir dados do livro
        b) Imprimir nomes de todos os livros
        c) Imprimir todos os dados de um livro específico
        d) Imprimir todos os dados dos livros de um autor específico
        e) Encerrar`)

        switch(op){
            case 'a': inserirLivro()
            break
            case 'b': imprimirNomes()
            break
            case 'c': imprimirLivro()
            break
            case 'd': imprimirPorAutor()
            break
            case 'e': alert("Encerrando... até mais! (✿◡‿◡)")
            break
            default: alert("Opção inválida! ƪ(˘⌣˘)ʃ")
        }
    }while(op != 'e')
}

menu()
