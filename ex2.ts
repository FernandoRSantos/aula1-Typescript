import promptSync = require('prompt-sync');

var prompt = promptSync();

const numeros : Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var w2 = Number(prompt("Digite um número maior que 10: "))

numeros.push(w2)

console.log(`Seu novo Array com o novo número é: ${numeros}`)