var carta1 = {
  nome: "Pikachu",
  imagem:
    "https://d17lbu6bbzbdc8.cloudfront.net/wp-content/uploads/2020/06/10214056/Ash-Pikachu.jpg",
  atributos: {
    ataque: 5,
    defesa: 9,
    magia: 10
  }
};

var carta2 = {
  nome: "Bulbasauro",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 6
  }
};

var carta3 = {
  nome: "Charmander",
  imagem:
    "https://pbs.twimg.com/profile_images/1377854248621199360/F7S8p4xK.jpg",
  atributos: {
    ataque: 9,
    defesa: 8,
    magia: 2
  }
};var carta3 = {
  nome: "Muk",
  imagem:
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/089.png",
  atributos: {
    ataque: 7,
    defesa: 6,
    magia: 8
  }
};
var carta4 = {
  nome: "Mewtwo",
  imagem:
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
  atributos: {
    ataque: 9,
    defesa: 8,
    magia: 10
  }
};

var carta5 = {
  nome: "Snorlax",
  imagem:
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png",
  atributos: {
    ataque: 6,
    defesa: 10,
    magia: 8
  }
};

var carta6 = {
  nome: "Squirtle",
  imagem:
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
  atributos: {
    ataque: 8,
    defesa: 6,
    magia: 7
  }
};

var carta7 = {
  nome: "Abra",
  imagem:
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/063.png",
  atributos: {
    ataque: 9,
    defesa: 7,
    magia: 8
  }
};

var carta8 = {
  nome: "Charizard",
  imagem:
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
  atributos: {
    ataque: 10,
    defesa: 9,
    magia: 10
  }
};

var carta9 = {
  nome: "Beedrill",
  imagem:
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png",
  atributos: {
    ataque: 8,
    defesa: 7,
    magia: 5
  }
};

var carta10 = {
  nome: "Diglett",
  imagem:
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png",
  atributos: {
    ataque: 6,
    defesa: 7,
    magia: 5
  }
};


var cartaMaquina;
var cartaJogador;
var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10];
// 0          1           2

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 10);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 10);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 10);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value;
    }
  }
}

function jogar() {
  console.log("chamou");
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Venceu</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Perdeu</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}