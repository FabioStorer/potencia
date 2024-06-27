const prompt = require('prompt-sync')();

while (true) {
let base = +prompt('Digite um número que irei calcular a potencia do mesmo:');
let expoente = +prompt('Digite agora o expoente:');
let aux = base;
aux = Number(aux)
let resultado = base


    for (let i = 1; i < expoente; i++) {
        for (let j = 1; j < base; j++) {
            resultado += aux
        }
        aux = resultado
    }
    console.log(`A potencia do número informado é ${resultado}.`);
}
