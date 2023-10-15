let soma = 0;
let somaSaida = 0;
const cxEntrada = document.querySelector(".entrOutubro");
const cxSaida = document.querySelector(".saidOutubro");
const cxSaldo = document.querySelector(".vlSaldo");
const entrada = document.querySelectorAll(".vlentrada");
const saida = document.querySelectorAll(".vlsaida");


for (let i = 0; i < 8; i++) {


  soma = Number(entrada[i].textContent) + soma;
  somaSaida = Number(saida[i].textContent) + somaSaida;
}


cxEntrada.innerHTML = soma;
cxSaida.innerHTML = somaSaida;
cxSaldo.innerHTML = Math.ceil(Number(cxEntrada.innerHTML) - Number(cxSaida.innerHTML) + 434);

