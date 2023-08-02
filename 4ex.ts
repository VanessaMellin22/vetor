const entrada2 = require("readline-sync");

let vetor:number[] = [];
let i2 = 1;

while ( i2 <= 5) {
  let nomes = (entrada2.question("Digite uma palavra: " ));
  vetor.push(nomes);
  vetor.sort();

  i2++
}

console.log(vetor);