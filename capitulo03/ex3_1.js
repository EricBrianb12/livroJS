const prompt = require("prompt-sync")()// adiciona pacote de entrata de dados, serve para habilidar escrever entradas na linha de comando
const num1 = Number(prompt("1° número: "))
const num2 = Number(prompt("2° número: "))
const soma = num1 + num2
console.log(`Soma é: ${soma}`)