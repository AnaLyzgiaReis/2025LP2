let alunosWhile = [];
let i = 0;
while (i < 5) {
  let matricula = prompt(`(While) Matrícula do aluno ${i+1}:`);
  let nota = parseFloat(prompt(`(While) Nota do aluno ${i+1}:`));
  alunosWhile.push({matricula, nota});
  i++;
}
let mediaWhile = alunosWhile.reduce((soma, a) => soma + a.nota, 0) / alunosWhile.length;
console.log(`(While) Média da turma: ${mediaWhile}`);
console.log("(While) Alunos acima da média:");
alunosWhile.forEach(a => {
  if (a.nota > mediaWhile) console.log(`Matrícula: ${a.matricula} | Nota: ${a.nota}`);
});

let alunosDoWhile = [];
let j = 0;
do {
  let matricula = prompt(`(Do-While) Matrícula do aluno ${j+1}:`);
  let nota = parseFloat(prompt(`(Do-While) Nota do aluno ${j+1}:`));
  alunosDoWhile.push({matricula, nota});
  j++;
} while (j < 5);
let mediaDoWhile = alunosDoWhile.reduce((soma, a) => soma + a.nota, 0) / alunosDoWhile.length;
console.log(`(Do-While) Média da turma: ${mediaDoWhile}`);
console.log("(Do-While) Alunos acima da média:");
alunosDoWhile.forEach(a => {
  if (a.nota > mediaDoWhile) console.log(`Matrícula: ${a.matricula} | Nota: ${a.nota}`);
});

let alunosFor = [];
for (let k = 0; k < 5; k++) {
  let matricula = prompt(`(For) Matrícula do aluno ${k+1}:`);
  let nota = parseFloat(prompt(`(For) Nota do aluno ${k+1}:`));
  alunosFor.push({matricula, nota});
}
let mediaFor = alunosFor.reduce((soma, a) => soma + a.nota, 0) / alunosFor.length;
console.log(`(For) Média da turma: ${mediaFor}`);
console.log("(For) Alunos acima da média:");
alunosFor.forEach(a => {
  if (a.nota > mediaFor) console.log(`Matrícula: ${a.matricula} | Nota: ${a.nota}`);
});
