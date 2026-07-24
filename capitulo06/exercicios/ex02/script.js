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

  resp2.innerText = ""

  form.inNumero.value = ""
  form.inNumero.focus()
})


form.btnVerificar.addEventListener("click", () => {
  if (numeros.length === 0) {
    alert("Não há números cadastrados na lista")
    form.inNumero.focus()
    return
  }

  let ordem = true

  for (let i = 0; i < numeros.length - 1; i++) {
    if (numeros[i] > numeros[i + 1]) {
      ordem = false
      break
    }
  }

  resp2.innerText = ordem ? "Ok! Números estão em ordem crescente" : "Atenção... Números não estão em ordem crescente"

})
