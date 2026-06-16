const form = document.querySelector("form")
const resp = document.querySelector("h3")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const num = Number(form.inNumero.value)
  let temDivisor = 0

  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      temDivisor = 1
      break
    }
  }

  if (num > 1 && !temDivisor) {
    resp.innerText = `${num} é primo`
  } else {
    resp.innerText = `${num} não é primo`
  }
})