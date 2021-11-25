function calculaNota(){


    
 nome = document.getElementById("nomeU").value;
 nota1 = parseFloat(document.getElementById("nota1").value);
 nota2 = parseFloat(document.getElementById("nota2").value);
 nota3 = parseFloat(document.getElementById("nota3").value);
 nota4 = parseFloat(document.getElementById("nota4").value);

 //console.log("passou aqui")

var notaPrimeiroBimestre = nota1;
var notaSegundoBimestre =  nota2;
var notaTerceiroBimestre = nota3;
var notaQuartoBimestre =nota4;
var resultadoCalculado= ("Bem vindo " + nome + " sua média é: " + (notaPrimeiroBimestre+notaSegundoBimestre+notaTerceiroBimestre+notaQuartoBimestre)/4);
var resultado = document.getElementById("resultado");
resultado.innerHTML = resultadoCalculado;
}




