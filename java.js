let soma = 0;
let somaSaida = 0;
const cxEntrada = document.querySelector("#entrOutubro");
const cxSaida = document.querySelector("#saidOutubro");
const cxSaldo = document.querySelector("#vlSaldo");
const entrada = document.querySelectorAll(".vlentrada");
const saida = document.querySelectorAll(".vlsaida");
const BdGastos = document.getElementsByClassName("gastos");

for (let i = 0; i < 20; i++) {

  try {


    if (entrada[i].innerHTML || saida.innerHTML > 0) {
      soma = Number(entrada[i].textContent) + soma;
      somaSaida = Number(saida[i].textContent) + somaSaida;
    }

  } catch { break };

}

cxEntrada.innerHTML = soma
cxSaida.innerHTML = somaSaida
cxSaldo.innerHTML = Math.ceil(Number(cxEntrada.innerHTML) - Number(cxSaida.innerHTML) + 434);

//FORMATAÇÃO DOS VALORES EM MOEDAS BR;
cxEntrada.innerHTML = soma.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
cxSaida.innerHTML = somaSaida.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
cxSaldo.innerHTML = "R$" + "" + " " + cxSaldo.innerHTML;


/*function somarValores(i) {

  alert(i);
}

let chamarFunction = somarValores(300)*/