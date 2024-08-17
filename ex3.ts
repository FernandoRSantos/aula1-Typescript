import promptSync = require('prompt-sync');

var prompt = promptSync();

const w3 : number = Number(prompt("Digite o 1° número: "));
const x3 : number = Number(prompt("Digite o 2° número: "));

const y3 = console.log(`A soma entre ${w3} e ${x3} é: ${w3 + x3}`);
const z3 = console.log(`A subtração entre ${w3} e ${x3} é: ${w3 - x3}`);
const a3 = console.log(`A multiplicação entre ${w3} e ${x3} é: ${w3 * x3}`);
const b3 = console.log(`A divisão entre ${w3} e ${x3} é: ${w3 / x3}`);


