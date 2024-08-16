import promptSync = require('prompt-sync');

var prompt = promptSync();

var e1a = Number(prompt("Digite um valor aqui: "));

const w = e1a + 1;
const x = e1a + 2;
const y = e1a - 1;
const z = e1a - 2;

console.log(`Os sucessores de ${e1a} são: ${w} e ${x}, já seus antecessores são: ${y} e ${z}`);