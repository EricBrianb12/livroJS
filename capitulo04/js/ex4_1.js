const form = document.querySelector("form")
const mediaDesc = document.querySelector("h3")
const situacaoDesc = document.querySelector("h4")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const aluno = form.inNomeAluno.value
  const nota1 = Number(form.inNota1.value)
  const nota2 = Number(form.inNota2.value)

  const media = (nota1 + nota2) / 2

  mediaDesc.innerText = `Média das notas: ${media.toFixed(2)}`

  if (media >= 7) {
    situacaoDesc.innerText = `Parabéns ${aluno}! Você foi aprovado`
    situacaoDesc.style.color = "blue"
  } else if (media >= 5) {
    situacaoDesc.innerText = `$Atenção {aluno}... Você está em exame`
    situacaoDesc.style.color = "tomato"
  } else {
    situacaoDesc.innerText = `Ops ${aluno}... Você foi reprovado`
    situacaoDesc.style.color = "red"
  }
})