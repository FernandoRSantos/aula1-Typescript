import promptSync = require('prompt-sync');

var prompt = promptSync();

const w6 : number = Number(prompt("Digite um número: "));

if(w6 % 2 === 0){
    console.log("É par.")
}

else{
    console.log("É ímpar.")
}