let nome = prompt("Digite o nome do seu Pokemão:");
let hpInicial = 10;
let ataqueInicial = Math.floor(Math.random() * 3) + 1;
let levelInicial = 1;

let pokemao = {
  nome: nome,
  hp: hpInicial,
  ataque: ataqueInicial,
  level: levelInicial
};

let vitorias = 0;
let derrotas = 0;

let dadosIniciais = { ...pokemao };

let opcao;
do {
  opcao = prompt(
    "Escolha uma opção:\n" +
    "1) Batalhar\n" +
    "2) Vitórias vs Derrotas\n" +
    "3) Listar objeto\n" +
    "4) Sair"
  );

  if (opcao === "1") {
    let inimigo = {
      hp: Math.floor(Math.random() * 6) + 5, 
      ataque: Math.floor(Math.random() * 5)  
    };

    console.log(`\nInimigo apareceu! HP: ${inimigo.hp}, Ataque: ${inimigo.ataque}`);
    let hpPokemao = pokemao.hp;

    while (hpPokemao > 0 && inimigo.hp > 0) {
      inimigo.hp -= pokemao.ataque;
      console.log(`${pokemao.nome} atacou! Inimigo HP: ${inimigo.hp}`);
      if (inimigo.hp <= 0) break;

      hpPokemao -= inimigo.ataque;
      console.log(`Inimigo atacou! ${pokemao.nome} HP: ${hpPokemao}`);
    }

    if (hpPokemao > 0) {
      console.log("Você venceu a batalha!");
      vitorias++;
      pokemao.level++;

      let escolha = prompt("Você venceu! Escolha qual atributo aumentar:\n1) HP\n2) Ataque");
      if (escolha === "1") {
        pokemao.hp += 2;
        console.log(`${pokemao.nome} ganhou +2 HP!`);
      } else {
        pokemao.ataque++;
        console.log(`${pokemao.nome} ganhou +1 de ataque!`);
      }
    } else {
      console.log("Você perdeu a batalha!");
      derrotas++;
    }
  }

  else if (opcao === "2") {
    console.log(`Vitórias: ${vitorias}, Derrotas: ${derrotas}`);
  }

  else if (opcao === "3") {
    console.log("Dados iniciais:", dadosIniciais);
    console.log("Dados atuais:", pokemao);
  }

} while (opcao !== "4");

console.log("Programa encerrado!");
