const form = document.querySelector("form")
const resp = document.querySelector("h3")

form.addEventListener("submit", (e) => {
  const valorMinuto = Number(form.inValorMinuto.value)
  const tempoUso = Number(form.inTempoUso.value)

  const pagar = Math.ceil(tempoUso / 15) * valorMinuto

  resp.innerText = `Valor a pagar R$: ${pagar.toFixed(2)}`

  e.preventDefault()
})