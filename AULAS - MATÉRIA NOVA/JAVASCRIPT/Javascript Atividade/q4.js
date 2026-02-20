let n1 = Number( prompt("Insira a nota 1:"))
let p1 = Number( prompt("Insira o peso da nota 1: "))
let n2 = Number( prompt("Insira a nota 2:"))
let p2 = Number( prompt("Insira o peso da nota 2: "))
let n3 = Number( prompt("Insira a nota 3:"))
let p3 = Number( prompt("Insira o peso da nota 3: "))


alert("A média ponderada é: " + ((n1*p1)+(n2*p2)+(n3*p3)) / (p1+p2+p3))