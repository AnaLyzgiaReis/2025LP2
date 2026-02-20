const alunos = [
    { nome: "Ana", nota: "10" },
    { nome: "Karina", nota: "2" },
    { nome: "Zé da Manga", nota: "7" }
];

function exibirAlunos() {
    const divNotas = document.querySelector(".notas");

    alunos.forEach(aluno => {
        const divAluno = document.createElement("div");
        divAluno.classList.add("aluno");

        const nomeEl = document.createElement("h3");
        nomeEl.innerText = aluno.nome;
        divAluno.appendChild(nomeEl);

        const notaEl = document.createElement("p");
        notaEl.innerText = `Nota: ${aluno.nota}`;
        divAluno.appendChild(notaEl);

        divNotas.appendChild(divAluno);
    });
}

exibirAlunos();