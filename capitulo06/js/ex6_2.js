const form = document.querySelector("form")
const respErros = document.querySelector("#outErros")
const respChances = document.querySelector("#outChances")
const respDica = document.querySelector("#outDica")

const erros = [] //vetor de escopo global com números já apostados
const sorteado = Math.floor(Math.random() * 100) + 1 // num aleatorio entre 1 e 100
const CHANCES = 6 // constante com o número máximo de chances

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const numero = Number(form.inNumero.value)

  if (numero === sorteado) {
    respDica.innerText = `Parabéns! Número sorteado: ${sorteado}`
    form.btSubmit.disable = true
    form.btNovo.className = "exibe"
  } else {
    if (erros.includes(numero)) { //se o número já existe no vetor de erros, já apostou
      alert(`Você já apostou o número ${numero}, tente outro...`)
    } else {
      erros.push(numero) //diciona número errado ao vetor
      const numErros = erros.length //obtem o tamanho do vetor
      const numChances = CHANCES - numErros // calcula o número de chances

      //exibe n° de erros, conteúdo do vetor e n° de chances
      respErros.innerText = `${numErros} (${erros.join(", ")})`
      respChances.innerText = numChances
      if (numChances === 0) {
        alert("Suas chances acabaram...")
        form.btSubmit.disable = true
        form.btNovo.className = "exibe"
        respDica.innerText = `Game Over!! Número Sorteado: ${sorteado}`
      } else {
        //usa o operador ternário para a mensagem de dica
        const dica = numero < sorteado ? "Maior" : "Menor"
        respDica.innerText = `Dica: tente um número ${dica} que ${numero}`
      }
    }
  }
  console.log(sorteado)
  form.inNumero.value = ""
  form.inNumero.focus()
})