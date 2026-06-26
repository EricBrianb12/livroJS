const form = document.querySelector("form")
const resp = document.querySelector("pre")
const criancas = []

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const nome = form.inNome.value
  const idade = Number(form.inIdade.value)
  criancas.push({ nome, idade })
  form.reset() // reseta os campos do form
  form.inNome.focus()
  form.btnListar.dispatchEvent(new Event("click")) // aciona o click no btnListar no momento do submit
})

form.btnListar.addEventListener("click", () => {
  if (criancas.length === 0) {
    alert("Não há crianças na lista")
    return
  }

  let lista = ""
  for (const crianca of criancas) {
    const { nome, idade } = crianca //desestrutura o objeto
    lista += nome + " - " + idade + " anos\n"
  }
  resp.innerText = lista
})

form.btnResumir.addEventListener("click", () => {
  if (criancas.length === 0) {
    alert("Não há crianças na lista")
    return
  }

  const copia = [...criancas] //cria cópia do vetor criança
  copia.sort((a, b) => a.idade - b.idade) // ordena pela idade

  let resumo = ""
  let aux = copia[0].idade //menor idade do vetor ordenado
  let nomes = [] //para inserir nomes de cada idade

  for (const crianca of copia) {
    const { nome, idade } = crianca

    if (idade === aux) {
      nomes.push(nome)

    } else {
      resumo += aux + " ano(s):" + nomes.length + " criança(s) - "
      resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
      resumo += "(" + nomes.join(", ") + ")\n\n"
      aux = idade //obtem a nova idade na ordem
      nomes = [] //limpa o vetor dos nomes
      nomes.push(nome) //adiciona o primeiro da nova idade
    }
  }

  //adiciona a última criança
  resumo += aux + " ano(s): " + nomes.length + " criança(s) - "
  resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
  resumo += "(" + nomes.join(", ") + ")"
  resp.innerText = resumo   // exibe a resposta
})