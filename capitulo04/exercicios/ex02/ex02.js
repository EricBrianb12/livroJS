const form = document.querySelector("form")
const resposta = document.querySelector("h3")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const velocidadePermitida = Number(form.inVelocidadePermitida.value)
  const velocidadeCondutor = Number(form.inVelocidadeCondutor.value)

  if (velocidadeCondutor <= velocidadePermitida) {
    resposta.innerText = "Situação: Sem multa"
  } else {
    const maisVinte = velocidadePermitida * 1.2
    if (velocidadeCondutor <= maisVinte) {
      resposta.innerText = "Situação: Multa leve"
    } else {
      resposta.innerText = "Situação: Multa grave"
    }
  }

})