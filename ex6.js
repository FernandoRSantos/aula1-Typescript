"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var w6 = Number(prompt("Digite um número: "));
if (w6 % 2 === 0) {
    console.log("É par.");
}
else {
    console.log("É ímpar.");
}
