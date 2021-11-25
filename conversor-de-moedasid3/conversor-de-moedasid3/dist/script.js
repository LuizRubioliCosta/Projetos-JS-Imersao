function ConverterD() {
  var valorElemento = document.getElementById("valorD");
  var valor = valorElemento.value;
  var valorEmDolar = parseFloat(valor);
  var valorEmReal = valorEmDolar * 5.5;
  console.log (valorEmReal);
  var elementoValorConvertido = document.getElementById("valorConvertido");
 var valorConvertido = ("O resultado em real é: R$ " + valorEmReal);
  elementoValorConvertido.innerHTML = valorConvertido;
  console.log (elementoValorConvertido);
  
}

function ConverterE() {
  var valorElemento = document.getElementById("valorE");
  var valor = valorElemento.value;
  var valorEmDolar = parseFloat(valor);
  var valorEmReal = valorEmDolar * 6.4;
  console.log (valorEmReal);
  var elementoValorConvertido = document.getElementById("valorConvertido");
 var valorConvertido = ("O resultado em real é: R$ " + valorEmReal);
  elementoValorConvertido.innerHTML = valorConvertido;
  console.log (elementoValorConvertido);
  
}

function ConverterP() {
  var valorElemento = document.getElementById("valorP");
  var valor = valorElemento.value;
  var valorEmDolar = parseFloat(valor);
  var valorEmReal = valorEmDolar * 0.5;
  console.log (valorEmReal);
  var elementoValorConvertido = document.getElementById("valorConvertido");
 var valorConvertido = ("O resultado em real é: R$ " + valorEmReal);
  elementoValorConvertido.innerHTML = valorConvertido;
  console.log (elementoValorConvertido);
  
}