const form = document.querySelector("form")
const resp1 = document.getElementById("outResp1")
const resp2 = document.getElementById("outResp2")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const numero = Number(form.inNumero.value)
  let resposta = `Divisores de ${numero}: 1`
  let total = 1

  for (let i = 2; i <= numero / 2; i++) {
    if (numero % i === 0) {
      resposta += `, ${i}`
      total += i
    }
  }

  resp1.innerText = resposta + ` (soma ${total})`

  if (total === numero) {
    resp2.innerText = `${numero} é um número perfeito.`
  } else {
    resp2.innerText = `${numero} Não é um número perfeito`
  }

})