const form = document.querySelector("form")
const resp = document.querySelector("pre")
const clubes = []

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const clube = form.inClube.value
  clubes.push(clube)


  form.btnListar.dispatchEvent(new Event("click"))

  form.inClube.value = ""
  form.inClube.focus()
})

form.btnListar.addEventListener("click", () => {
  let mensagem = `Times cadastrados: \n` + "-".repeat(40) + "\n"
  if (clubes.length === 0) {
    alert("Sem times cadastrados para ser listado")
    inClube.focus()
    return
  } else {
    const clube = clubes.join("\n")
    resp.innerText = `${mensagem}${clube}`
  }
})

form.btnTabela.addEventListener("click", () => {
  const tam = clubes.length

  if (tam === 0 || tam % 2 === 1) {
    alert("Deve haver número par de clubes")
    inClube.focus()
    return
  }

  let jogos = ""

  const ultimo = tam - 1

  for (let i = 0; i < tam / 2; i++) {
    jogos += clubes[i] + " x " + clubes[ultimo - i] + "\n"
  }

  resp.innerText = jogos

})
