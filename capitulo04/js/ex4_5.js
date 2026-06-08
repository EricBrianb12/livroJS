const form = document.querySelector("form")
const desc = document.querySelector("h3")


form.addEventListener("submit", (e) => {
  e.preventDefault()

  const numero = Number(form.inNumero.value)
  let raiz = Math.sqrt(numero)

  if (Number.isInteger(raiz)) {
    desc.innerText = `Raiz: ${raiz}`
  } else {
    desc.innerText = `Não há raiz para ${numero}`
  }

})