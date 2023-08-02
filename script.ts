const Entrada = require('readline-sync');

let media: number = 0;
let valores: number[] = []

for( let i = 0; i < 5; i++){
    let numero
    = parseFloat(Entrada.question('Digite um valor: '));

    valores.push(numero);

    media = media + valores[i]
}
console.log(media/10)
console.log(Math.max(...valores));
console.log(Math.min(...valores));