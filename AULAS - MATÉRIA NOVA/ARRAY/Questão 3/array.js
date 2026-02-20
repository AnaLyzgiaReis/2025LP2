const fita = ["A", "U", "C", "G", "A", "C", "U", "G", "A", "U"]

let complemento = []

for(let i = 0; i < fita.length; i++){
    if(fita[i] === "A"){
        complemento.push("U")
    } else if(fita[i] === "U"){
        complemento.push("A")
    } else if(fita[i] === "C"){
        complemento.push("G")
    } else if(fita[i] === "G"){
        complemento.push("C")
    }
}

console.log("Fita original:", fita)
console.log("Fita complementar:", complemento)
