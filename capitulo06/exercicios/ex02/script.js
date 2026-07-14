const form = document.querySelector("form")
const resp1 = document.querySelector("#outLista")
const resp2 = document.querySelector("#outOrdem")
const numeros = []

form.addEventListener("submit", (e) => {
  e.preventDefault()
  //cadastra
  const numero = Number(form.inNumero.value)

  if (numeros.includes(numero)) {
    alert(`Insira outro Número! Você já adicionou o  n° ${numero}`)
    form.reset()
    form.inNumero.focus()
    return
  }

  numeros.push(numero)

  resp1.innerText = "Números: " + numeros.join(", ")
  form.inNumero.value = ""
  form.inNumero.focus()
})


form.btnVerificar.addEventListener("click", () => {
  if (numeros.sort()) {
    alert("numeros estão em ordem crescente")
  } else {
    alert("Atenção... Números não estão em ordem crescente")
  }
})
