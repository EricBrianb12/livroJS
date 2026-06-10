const form = document.querySelector("form")
const resposta = document.querySelector("h3")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const numero = Number(form.inNumero.value)

  resposta.innerText = numero % 2 === 0 ? `${numero} é par` : `${numero} é ímpar`

})