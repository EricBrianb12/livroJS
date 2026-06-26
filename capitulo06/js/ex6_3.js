const form = document.querySelector("form")
const resp = document.querySelector("pre")
const carros = [] //vetor global

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const modelo = form.inModelo.value
  const preco = Number(form.inPreco.value)
  carros.push({ modelo, preco })
  form.inModelo.value = ""
  form.inPreco.value = ""
  form.inModelo.focus()

  //Dispara um evento de click em btnListar (Equivale a um click no botão na página)
  form.btnListar.dispatchEvent(new Event("click"))
})

form.btnListar.addEventListener("click", () => {
  if (carros.length === 0) {
    alert("Não há carros na lista")
    return
  }

  const lista = carros.reduce((acumulador, carro) =>
    acumulador + carro.modelo + " - R$:" + carro.preco.toFixed(2) + "\n", "")

  resp.innerText = `Lista dos carros cadastrados\n${"-".repeat(40)}\n${lista}`
})

form.btnFiltrar.addEventListener("click", () => {
  const maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar?"))
  if (maximo === 0 || isNaN(maximo)) {
    return
  }

  //cria um novo vetor com os objetos que atendem a condição do filtro
  const carrosFilter = carros.filter(carro => carro.preco <= maximo)

  if (carrosFilter.length === 0) {
    alert("Não há carros com preço inferior ou igual ao solicitado")
    return
  }

  let lista = ""
  for (const carro of carrosFilter) {
    lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
  }

  resp.innerText = `Carros até R$: ${maximo.toFixed(2)}\n${"-".repeat(40)}\n${lista}`
})

form.btnSimular.addEventListener("click", () => {
  const desconto = Number(prompt("Qual o percentual de desconto?"))

  if (desconto === 0 || isNaN(desconto)) {
    return
  }

  const carroDesc = carros.map(aux => ({
    modelo: aux.modelo,
    preco: aux.preco - (aux.preco * desconto / 100)
  }))

  let lista = ""
  for (const carro of carroDesc) {
    lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
  }

  resp.innerText = `Carros com desconto: ${desconto}%\n${"-".repeat(40)}\n${lista}`
})