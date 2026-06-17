/*
c) Elaborar um programa para uma loja que leia o valor de uma conta e o número de vezes que um cliente deseja parcelar esse valor (em boletos ou carnê). Para facilitar o troco, o lojista deseja que as parcelas iniciais não tenham centavos, ou seja, centavos apenas na última parcela. Informe como resposta o valor de cada parcela, considerando essa situação.

ex: 
Valor R$: 91.50 
Nº de Parcelas: 3 
1ª parcela: R$ 30.00 
2ª parcela: R$ 30.00 
3ª parcela: R$ 31.50
 */

const prompt = require("prompt-sync")()
const valor = Number(prompt("Valor R$: "))
const parcelas = Number(prompt("N° de parcelas: "))
let valorParcelas = Math.floor(valor / parcelas)
const valorFinal = valorParcelas + (valor % parcelas)

for (let i = 1; i < parcelas; i++) {
  console.log(`${i}ª parcela: R$ ${valorParcelas.toFixed(2)}`)
}

console.log(`${parcelas}ª parcela: R$ ${valorFinal.toFixed(2)}`)