const form = document.querySelector("form")
const resp1 = document.getElementById("outResp")
const resp2 = document.getElementById("outTipo")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  //recebendo os dados
  const ladoA = Number(form.inLadoA.value)
  const ladoB = Number(form.inLadoB.value)
  const ladoC = Number(form.inLadoC.value)

  //criacao da variavel para informar que os valores não da um triangulo
  const notTriangulo = ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB

  //processa os dados para verificar se é triangulo e se for, qual ele é
  if (notTriangulo) {
    resp1.innerText = `Os lados não formam um triângulo`
  } else {
    resp1.innerText = `Os lados podem formar um triângulo`

    //criando as comparacoes de cada triangulo
    const equilatero = ladoA === ladoB && ladoA === ladoC
    const isosceles = ladoA === ladoB || ladoA === ladoC || ladoB === ladoC

    if (equilatero) {
      resp2.innerText = `Tipo: Equilátero`
    } else if (isosceles) {
      resp2.innerText = `Tipo: Isósceles`
    } else {
      resp2.innerText = `Tipo: Escaleno`
    }
  }





})