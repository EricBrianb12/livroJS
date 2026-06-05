const prompt = require("prompt-sync")()
const peso = Number(prompt("Informe o peso da ração(kg): "))
const consumo = Number(prompt("Informe o consumo diário(g): "))

const pesoGr = peso * 1000
const dias = Math.floor(pesoGr / consumo)
const sobra = pesoGr % consumo

console.log(`Duração: ${dias} dias`)
console.log(`Sobra: ${sobra}gr`)