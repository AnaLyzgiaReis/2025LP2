function menu(){
    let historico = []
    let pokemonAtual = null

    function gerarPokemon(){
        let chance = Math.random() * 100
        if(chance < 80){
            pokemonAtual = {nome:"Chansey :D", tipo:"Normal"}
        }else if(chance < 95){
            pokemonAtual = {nome:"Igglybuff ^0^", tipo:"Raro"}
        }else{
            pokemonAtual = {nome:"Skitty ( •̀ ω •́ )✧", tipo:"Lendário"}
        }
        historico.push(pokemonAtual)
        alert(`Pokemão gerado!\nNome: ${pokemonAtual.nome}\nTipo: ${pokemonAtual.tipo}`)
    }

    function taxasCaptura(){
        if(!pokemonAtual){
            alert("Nenhum pokemão gerado ainda!")
            return
        }
        let msg = `Pokemão atual: ${pokemonAtual.nome} (${pokemonAtual.tipo})\n\nChances:`
        if(pokemonAtual.tipo=="Normal"){
            msg += "\nItem normal: 100%\nItem raro: 200%"
        }else if(pokemonAtual.tipo=="Raro"){
            msg += "\nItem normal: 100%\nItem raro: 100%"
        }else if(pokemonAtual.tipo=="Lendário"){
            msg += "\nItem normal: 80%\nItem raro: 120%"
        }
        alert(msg)
    }

    function historicoPokemons(){
        if(historico.length==0){
            alert("Nenhum pokemão gerado ainda!")
        }else{
            let lista = ""
            for(let i=0;i<historico.length;i++){
                lista += `${i+1}. ${historico[i].nome} - ${historico[i].tipo}\n`
            }
            alert("Histórico de Pokemãos:\n"+lista)
        }
    }

    let op
    do{
        op = prompt(`Pokemão GO Manager OwO
        a) Gerar Pokemão
        b) Taxas de captura
        c) Histórico de Pokemãos
        e) Encerrar`)

        switch(op){
            case 'a': gerarPokemon()
            break
            case 'b': taxasCaptura()
            break
            case 'c': historicoPokemons()
            break
            case 'e': alert("Encerrando... até mais! （￣︶￣）↗　")
            break
            default: alert("Opção inválida, tente de novo! =_=")
        }
    }while(op != 'e')
}

menu()
