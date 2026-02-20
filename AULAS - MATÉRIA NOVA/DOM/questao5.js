const alunos = [
    { nome: "Ana", nota: "10" },
    { nome: "Karina", nota: "2" },
    { nome: "Zé da Manga", nota: "7" }
];

function exibirAlunos() {
    const divNotas = document.querySelector(".notas");

    const containerAlunos = document.createElement("div");
    containerAlunos.classList.add("alunos-lista");

    alunos.forEach(aluno => {
        const nomeEl = document.createElement("h3");
        nomeEl.innerText = aluno.nome;
        containerAlunos.appendChild(nomeEl);

        const notaEl = document.createElement("p");
        notaEl.innerText = `Nota: ${aluno.nota}`;
        containerAlunos.appendChild(notaEl);
    });

    divNotas.appendChild(containerAlunos);
}

exibirAlunos();
