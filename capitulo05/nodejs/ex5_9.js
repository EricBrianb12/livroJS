const prompt = require("prompt-sync")()
const nomeProduto = prompt("Produto: ")
const numEtiquetas = Number(prompt("N° de etiquetas: "))

for (let i = 1; i <= numEtiquetas / 2; i++) {
  console.log(`${nomeProduto.padEnd(30)} ${nomeProduto.padEnd(30)}`)
}

if (numEtiquetas % 2 === 1) {
  console.log(nomeProduto)
}