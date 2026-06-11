const form = document.querySelector("form");
const resp1 = document.querySelector("#outTempo");
const resp2 = document.querySelector("#outTroco");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const valor = Number(form.inValor.value);
  let sobra;

  //caso o saldo seja insuficiente
  if (valor < 1.00) {
    alert("Valor mínimo deve ser de R$: 1.00");
    form.inValor.focus();
    return;
  }

  //declara as variaveis
  let tempo;
  let troco;

  //condições para verificar, tempo e troco
  if (valor >= 3.00) {
    tempo = 120;
    troco = valor - 3.00;
  } else if (valor >= 1.75) {
    tempo = 60
    troco = valor - 1.75
  } else {
    tempo = 30
    troco = valor - 1.00
  }

  //limpa o texto da tela
  resp2.innerText = ""

  //exibe as respostas
  resp1.innerText = `Tempo: ${tempo} minuto`
  if (troco > 0) {
    resp2.innerText = `Troco R$: ${troco.toFixed(2)}`
  }
});


