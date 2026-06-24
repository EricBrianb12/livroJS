const form = document.querySelector("form")
const respErros = document.querySelector("#outErros")
const respChances = document.querySelector("#outChances")
const respDica = document.querySelector("#outDica")

const erros = []
const CHANCES = 6
const sorteado = Math.floor(Math.random() * 100 + 1)

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const numero = Number(form.inNumero.value)

  if (numero === sorteado) {
    respDica.innerText = `Parabéns, número sorteado: ${sorteado}`
    form.btnApostar.disabled = true
    form.btnNovo.className = "exibe"
  } else {
    if (erros.includes(numero)) {
      alert(`O número ${numero} já foi apostado, tente outro...`)
    } else {
      erros.push(numero)
      const numErros = erros.length
      const numChances = CHANCES - numErros

      respErros.innerText = `${numErros} (${erros.join(", ")})`
      respChances.innerText = numChances

      if (numChances === 0) {
        alert("Suas chances acabaram...")
        form.btnApostar.disabled = true
        form.btnNovo.className = "exibe"
      } else {
        const dica = numero < sorteado ? "maior" : "menor"
        respDica.innerText = `Dica: tente um número ${dica} que ${numero}`
      }
    }
  }

  form.inNumero.value = ""
  form.inNumero.focus()
})

form.btnNovo.addEventListener("click", () => {
  location.reload()
})

