const materias = [
    {nome: "Matemática", nota: 70, freq: 80},
    {nome: "Português", nota: 55, freq: 75},
    {nome: "História", nota: 90, freq: 95},
    {nome: "Geografia", nota: 60, freq: 65},
    {nome: "Inglês", nota: 85, freq: 88},
    {nome: "Biologia", nota: 50, freq: 70},
    {nome: "Química", nota: 78, freq: 82},
    {nome: "Física", nota: 62, freq: 60}
]

let somaFreq = 0
for(let i = 0; i < materias.length; i++){
    somaFreq += materias[i].freq
}
let mediaFreq = somaFreq / materias.length
console.log("Média de frequência:", mediaFreq)

let acimaMedia = 0
for(let i = 0; i < materias.length; i++){
    if(materias[i].nota > 60){
        acimaMedia++
    }
}
console.log("Quantidade de notas acima de 60:", acimaMedia)
