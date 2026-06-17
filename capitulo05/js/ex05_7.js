const form = document.querySelector("form")
const resp = document.getElementById("outEspacos")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const num = Number(form.inNumero.value)
  let estrelas = ""

  for (let i = 1; i <= num; i++) {
    //a condição faz começar pelo número impar
    if (i % 2 === 1) {
      estrelas += "*"
    } else {
      estrelas += "_"
    }
  }
  resp.innerText = estrelas
  form.inNumero.value = ""
  form.inNumero.focus()

})