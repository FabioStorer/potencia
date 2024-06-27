const prompt = require('prompt-sync')();
let resultado = 0;

let base = prompt('Digite um número que irei calcular a potencia do mesmo:');
let expoente = prompt('Digite agora o expoente:');

for (let i = 1; i <= expoente; i++) {
    resultado = resultado + (base * expoente)
}

console.log(`A potencia do número informado é ${resultado}.`);