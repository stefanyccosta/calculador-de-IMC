const alturaEl = document.getElementById("altura");
const pesoEl = document.getElementById("peso");
const resultadoEl = document.querySelector(".resultado");

function calculaImc(){
    console.log(pesoEl);
    let calculo = pesoEl.value/ Math.pow(alturaEl.value, 2);
   resultadoEl.innerHTML = "Seu IMC é de: "+ calculo.toFixed(1);
   limpaInput()

};

  function limpaInput(){
    pesoEl.value = " "
    alturaEl.value = " "
  }
   
