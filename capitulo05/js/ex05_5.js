const form = document.querySelector("form")
const resp1 = document.getElementById("outResp1")
const resp2 = document.getElementById("outResp2")

let resposta = ""
let numContas = 0 // variavel contadora
let valTotal = 0 // variavel acumulativa

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const descricao = form.inDescricao.value
  const valor = Number(form.inValor.value)

  numContas++
  valTotal += valor
  resposta += `${descricao} - R$ ${valor.toFixed(2)}\n`

  resp1.innerText = `${resposta} --------------------------------`
  resp2.innerText = `${numContas} Conta(s) - Total R$: ${valTotal.toFixed(2)}`

  form.inDescricao.value = "" //limpa campo do form
  form.inValor.value = ""  // limpa campo do form
  form.inDescricao.focus()

})