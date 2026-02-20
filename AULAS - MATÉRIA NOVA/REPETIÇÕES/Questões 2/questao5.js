let n = parseInt(prompt("Quantas pessoas terão a temperatura registrada?"));

let i = 0;
let febreWhile = 0;
while (i < n) {
  let temp = parseFloat(prompt(`(While) Temperatura da pessoa ${i+1}:`));
  if (temp > 38) febreWhile++;
  i++;
}
console.log(`(While) Pessoas com febre: ${febreWhile}`);

let j = 0;
let febreDoWhile = 0;
do {
  let temp = parseFloat(prompt(`(Do-While) Temperatura da pessoa ${j+1}:`));
  if (temp > 38) febreDoWhile++;
  j++;
} while (j < n);
console.log(`(Do-While) Pessoas com febre: ${febreDoWhile}`);

let febreFor = 0;
for (let k = 0; k < n; k++) {
  let temp = parseFloat(prompt(`(For) Temperatura da pessoa ${k+1}:`));
  if (temp > 38) febreFor++;
}
console.log(`(For) Pessoas com febre: ${febreFor}`);
