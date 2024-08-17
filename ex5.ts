import promptSync = require('prompt-sync');

var prompt = promptSync();

const w5 = Number(prompt("Digite o 1° número, por favor: "));

const x5 = Number(prompt("Digite o 2° número, por favor: "));

const confere : number = Number(prompt("Digite o número a ser pesquisado, por favor: "));

if(confere > w5 && confere < x5){
    console.log("Está no intervalo.")
}

else{
    console.log("Não está no intervalo.")
}