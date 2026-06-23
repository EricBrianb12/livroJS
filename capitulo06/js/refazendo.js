const form = document.querySelector("form")
const respErros = document.querySelector("outErros")
const respChances = document.querySelector("outChances")
const respDica = document.querySelector("outDica")

const erros = []
const CHANCES = 6
const sorteado = Math.floor(Math.random() * 100 + 1)

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const numero = Number(form.inNumero.value)

  if (numero === sorteado) {
    respDica.innerText = `Parabéns, número sorteado: ${sorteado}`
  }

})

console.log(sorteado)