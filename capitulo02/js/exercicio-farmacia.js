const form = document.querySelector("form")
const nomeProdutoDesc = document.getElementById("nomeProduto")
const promocaoDesc = document.getElementById("promocao")


form.addEventListener("submit", (e) => {
  const nomeProduto = form.inMedicamento.value
  const preco = Number(form.inPreco.value)

  const promocao = Math.floor(preco * 2)

  nomeProdutoDesc.innerText = `Promoção de ${nomeProduto}`
  promocaoDesc.innerText = `Leve 2 por apenas R$: ${promocao.toFixed(2)}`


  e.preventDefault()
})