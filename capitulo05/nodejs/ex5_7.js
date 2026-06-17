const prompt = require("prompt-sync")()
console.log("Programa anos de copa do mundo. Digite 0 para sair")
console.log("-------------------------------------------------------------")

do {
  const ano = Number(prompt("Ano: "))
  if (ano === 0) {
    console.log("Programa encerrado!")
    break
  } else if (ano === 1942 || ano === 1946) {
    console.log(`Não houve copa em ${ano} (Segunda guerra mundial)`)
  } else if (ano >= 1930 && ano % 4 === 2) {
    console.log(`Sim! ${ano} foi ano de copa do mundo!`)
  } else {
    console.log(`não... ${ano} não foi ano de copa do mundo`)
  }

} while (true)

