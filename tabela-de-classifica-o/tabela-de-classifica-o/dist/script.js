var rafa = {nome:"Rafa", vitorias:0,empates:0,derrotas:0,pontos:0};
var paulo = {nome:"Paulo", vitorias:0,empates:0,derrotas:0,pontos:0};
var gui = {nome:"Gui", vitorias:0,empates:0,derrotas:0,pontos:0};


function calculaPontos(jogador){
  var pontos = jogador.vitorias*3+jogador.empates;
  jogador.pontos= pontos;
  return pontos;
 
}
/*
function novoJogador(jogadores){
  novoJogador.nome = document.getElementById("novoJogadorNome").value;
  novoJogador.vitorias = document.getElementById("novoJogadorVitorias").value;
  novoJogador.empates = document.getElementById("novoJogadorEmpates").value;
  novoJogador.derrotas = document.getElementById("novoJogadorDerrotas").value;
  novoJogador.pontos = document.getElementById("novoJogadorPontos").value;
  jogadores+= novoJogador;
  return novoJogador;
  var elemento = document.getElementById("novoJogador").value;
  novoJogador.nome = elemento.value;
}
*/
var jogadores = [rafa, paulo, gui];



function exibeJogadoresNaTela(jogadores){
  var elemento = "";
  for (var i=0; i<jogadores.length;i++){
     elemento += "<tr><td>" + jogadores[i].nome +"</td>"
     elemento +=  "<td>" + jogadores[i].vitorias + "</td>"
     elemento +=   "<td>" + jogadores[i].empates + "</td>"
     elemento +=   "<td>" + jogadores[i].derrotas + "</td>"
     elemento +=   "<td>" + jogadores[i].pontos + "</td>"
     elemento +=   "<td><button onClick='adicionarVitoria("+ i +")''>Vitória</button></td>"
     elemento +=   "<td><button onClick='adicionarEmpate("+ i +")'>Empate</button></td>"
     elemento +=   "<td><button onClick='adicionarDerrota("+ i +")'>Derrota</button></td>"
     elemento +=   "<td><button onClick='zerarDados("+ i +")'>Zerar Dados</button></td>"
     elemento += "</tr>"
  }
 var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}
exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i){
  var jogador = jogadores[i]
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}
function adicionarEmpate(i){
  var jogador = jogadores[i]
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}
function adicionarDerrota(i){
  var jogador = jogadores[i]
  jogador.derrotas++;
  exibeJogadoresNaTela(jogadores);
}
function zerarDados(i){
  var jogador = jogadores[i]
  jogador.vitorias=0;
  jogador.empates=0;
  jogador.derrotas=0;
  jogador.pontos=0;
  exibeJogadoresNaTela(jogadores);
}