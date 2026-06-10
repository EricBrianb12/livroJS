const form = document.querySelector("form")
const tempo = document.querySelector("#tempo")
const troco = document.querySelector("#troco")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const valor = Number(form.inValor.value)

  if (valor < 1 || valor > 3) {
    alert("Valor mínimo deve ser de R$: 1.00 e o valor máximo de R$: 3.00")
    form.inValor.focus()
    return
  }

  if (valor < 1.75) {
    tempo.innerText = `Tempo: 30 minutos`;
  } else {
    if (valor <= 3) {
      tempo.innerText = `Tempo: 30 minutos`;
    }
  }





})