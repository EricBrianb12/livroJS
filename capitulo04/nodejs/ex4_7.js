const prompt = require("prompt-sync")()

const numeroPessoas = Number(prompt("Digite o número de pessoas: "))
const quantidadePeixes = Number(prompt("Digite a quantidade de peixes: "))

let valorPagar = numeroPessoas * 20

if (quantidadePeixes > numeroPessoas) {
  valorPagar += (quantidadePeixes - numeroPessoas) * 12
}

console.log(`Pagar R$: ${valorPagar.toFixed(2)}`)