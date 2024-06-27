const prompt = require('prompt-sync')();
let resultado = 0;

let base = prompt('Digite um número que irei calcular a potencia do mesmo:');
let expoente = prompt('Digite agora o expoente:');
let aux = 0;
base = Number(base)
expoente = Number(expoente)
aux = Number(aux)

for (let i = 0; i <= expoente; i++) {
    resultado = (resultado + (base + base))
    console.log(resultado)
}
resultado = resultado + base

console.log(`A potencia do número informado é ${resultado}.`);