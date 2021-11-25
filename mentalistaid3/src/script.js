var numeroSecreto = parseInt(Math.random() * 11);

function Chutar(){
  var resultado = document.getElementById("resultado");
  var numero= numeroSecreto;
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute)
  if (chute == numero ) {
   resultado.innerHTML = "Você acertou!";
  }
  else if (chute > 10 || chute < 0){
    resultado.innerHTML = "Digite um número entre 0 e 10";
  }
  else {
    resultado.innerHTML = "Você Errou!";
  }
}


