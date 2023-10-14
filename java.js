//let vl = document.querySelector("#valo");
//let vlr = document.querySelector("#valor");
//let soma = Number(vl.textContent) + Number(vlr.textContent);
//let somas = 10 + 30;

//alert(soma);

let soma = 0;
let somaSaida = 0;



for (let i = 0; i < 8; i++) {


  entrada = document.querySelectorAll(".vlentrada");
  saida = document.querySelectorAll(".vlsaida")
  soma = Number(entrada[i].textContent) + soma;
  somaSaida = Number(saida[i].textContent) + somaSaida;


}

let cxEntrada = document.querySelector(".entrOutubro");
cxEntrada.innerHTML = soma;
let cxSaida = document.querySelector(".saidOutubro");
cxSaida.innerHTML = somaSaida;

let cxSaldo = document.querySelector(".vlSaldo");
cxSaldo.innerHTML = Math.ceil(Number(cxEntrada.innerHTML) - Number(cxSaida.innerHTML) + 434);



