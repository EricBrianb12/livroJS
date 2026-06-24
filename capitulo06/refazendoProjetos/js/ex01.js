const form = document.querySelector("form")
const respAtendido = document.querySelector("span")
const respLista = document.querySelector("pre")

const listaPacientes = []

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const paciente = form.inPaciente.value
  listaPacientes.push(paciente)

  let lista = ""
  for (let i = 0; i < listaPacientes.length; i++) {
    lista += `${i + 1}. ${listaPacientes[i]}\n`
  }

  respLista.innerText = lista
  form.inPaciente.value = ""
  form.inPaciente.focus()
})

form.btnUrgencia.addEventListener("click", () => {
  if (!form.checkValidity()) {
    alert("Informe o nome do paciente a ser atendido em caráter de urgência")
    form.inPaciente.focus()
    return
  }

  const paciente = form.inPaciente.value
  listaPacientes.unshift(paciente)

  let lista = ""
  listaPacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`))

  respLista.innerText = lista
  form.inPaciente.value = ""
  form.inPaciente.focus()
})

form.btnAtender.addEventListener("click", () => {
  if (listaPacientes.length === 0) {
    alert("Não existe pacientes na fila de espera")
    respAtendido.innerText = ""
    respAtendido.style.display = "none"
    form.inPaciente.focus()
    return
  }

  respAtendido.style.display = "inherit"

  const atendimento = listaPacientes.shift(paciente)
  respAtendido.innerText = atendimento

  let lista = ""
  listaPacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`))
  respLista.innerText = lista
})
