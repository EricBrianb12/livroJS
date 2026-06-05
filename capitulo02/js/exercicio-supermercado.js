const form = document.querySelector("form")
const nomeProdutoDesc = document.querySelector("#nomeProduto")
const promocaoDesc = document.querySelector("#promocao")


form.addEventListener("submit", (e) => {
  const nomeProduto = form.inProduto.value
  const precoProduto = Number(form.inPreco.value)

  const produtoDesconto = precoProduto / 2
  const promocao = (precoProduto * 2) + produtoDesconto

  nomeProdutoDesc.innerText = `${nomeProduto} - Promoção leve 3 por R$: ${promocao.toFixed(2)}`
  promocaoDesc.innerText = `O 3º produto custa apenas R$: ${produtoDesconto.toFixed(2)}`

  e.preventDefault()
})