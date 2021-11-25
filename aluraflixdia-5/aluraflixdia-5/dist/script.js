var listaFilmes = ["https://occ-0-1068-1722.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABd2OQ7rv46dEzswaeA2uVzFVfyazej_4Jr6aiTXwjr6BfLxpdVLROTIfNkTMNTnU0i_UWlKEXCLpTmzwE3bb9OaCZ1eVs-Iaoqn1.png?r=646"," https://occ-0-1068-92.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABdPChfCEFiD521b1XCoFfvQlx9F1no-tUHM5SFJ0s9bFxk1GyIkjeZSM60x-CfbcNTPr0TeSnSWt44udge1B-KKTlo8tXsMGcGhW.png?r=74a", " https://i.ibb.co/VL5F4Lc/rick-e-morty.jpg?w=144 "];

for (var i=0; i<listaFilmes.length; i++ ){
  document.write("<img src=" + listaFilmes[i] + ">");
}
function adicionarFilme(){
  var filme = document.getElementById("filme").value;
  if (filme.endsWith(".jpg")){
    listarFilmesNaTela(filme);
}
  else{
    console.error("Endereço inválido")
  }
  document.getElementById("filme").value = ""
}

function listarFilmesNaTela(filme){
 var elementoFilmeFavorito = "<img src=" + filme  + ">";
 var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}