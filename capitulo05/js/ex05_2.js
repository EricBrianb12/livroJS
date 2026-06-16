const form = document.querySelector("form")
const resp = document.querySelector("h3")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const numero = Number(form.inNumero.value)
  let resposta = `Entre ${numero} e 1: ${numero}`

  for (let i = numero - 1; i > 0; i--) {
    resposta += `, ${i}`
  }

  resp.innerText = resposta
})