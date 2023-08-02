const entrada = require("readline-sync")

let names: string[] = [];


for (let i = 0; i < 5; i++) {
  let nome = entrada.question("Digite o nome: ");
  names.push(nome);
}

let maior = '';


for (let nome of names) {
  if (nome.length > maior.length) {
    maior = nome;
  }
}

console.log("O maior nome digitado foi: " + maior);