const form = document.querySelector("form")
const resp01 = document.getElementById("outResp01")
const resp02 = document.getElementById("outResp02")
const resp03 = document.getElementById("outResp03")


form.addEventListener("submit", (e) => {
  e.preventDefault()

  const saque = Number(form.inSaque.value)

  if (saque % 10 != 0) {
    alert("valor inválido para notas disponíveis (R$ 10, 50, 100)")
    form.inSaque.focus()
    return
  }

  const notasCem = Math.floor(saque / 100)
  let resto = saque % 100
  const notasCinquenta = Math.floor(resto / 50)
  resto = resto % 50
  const notasDez = Math.floor(resto / 10)

  if (notasCem > 0) {
    resp01.innerText = `Notas de R$ 100: ${notasCem}`
  }
  if (notasCinquenta > 0) {
    resp02.innerText = `Notas de R$ 50: ${notasCinquenta}`
  }
  if (notasDez > 0) {
    resp03.innerText = `Notas de R$ 10: ${notasDez}`
  }


})