const form = document.querySelector("form")
const resp = document.querySelector("pre")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const numeroChin = Number(form.inNumero.value)
  const anos = Number(form.inAnos.value)

  let resposta = ""
  let total = numeroChin

  for (let i = 1; i <= anos; i++) {
    resposta += `${i}° ano: ${total} Chinchilas\n`
    total = numeroChin * 3
  }

  resp.innerText = `${resposta}`

  form.inAnos.value = ""
  form.inNumero.value = ""
  form.inNumero.focus()
})