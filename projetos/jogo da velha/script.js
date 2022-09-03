var jogo = []; // onde esta armazenado o processamento do jogo
var tabuleiro = []; // elementos visuais
var quemJoga = 0; // 0 jogador 1cpu
var verifica; // se alguem ganhou ou empatou
var jogando = true; // false alguem ganhou ou empatou
var nivel = 2; // nivel de jogo
var jogadaCpu = 1; // qual jogada cpu ta fazendo
var quemComeca = 1;
var jogada = 0;

/* associar cada posiçao como uma matriz 2 por 2 no array JOGO, 
  0,0/0,1/0,2
  1,0/1,1/1,2
  2,0/2,1/2,2
  */
function cpuJoga() {
  // como cpu ira jogar
  if (jogando) {
    var l, c;
    if (nivel == 1) {
      do {
        l = Math.round(Math.random() * 2); // linha /arredonda pra cima, 0, 1, 2
        c = Math.round(Math.random() * 2); // coluna
      } while (jogo[l][c] != ""); // vai sortear ate achar um diferente de vazio
      jogo[l][c] = "O";
    } else if (nivel == 2) {
      if (jogo[0][1] == "X" && jogo[2][1] == "X" && jogo[1][1] == "") {
        jogo[1][1] = "O";
      } else if (jogo[1][1] == "X" && jogo[1][0] == "X" && jogo[1][2] == "") {
        jogo[1][2] = "O";
      } else if (jogo[0][1] == "X" && jogo[1][1] == "X" && jogo[2][1] == "") {
        jogo[2][1] = "O";
      } else if (jogo[1][1] == "X" && jogo[1][2] == "X" && jogo[1][0] == "") {
        jogo[1][0] = "O";
      } else if (jogo[1][1] == "X" && jogo[2][1] == "X" && jogo[0][1] == "") {
        jogo[0][1] = "O";
      } else if (jogo[1][0] == "X" && jogo[1][2] == "X" && jogo[1][0] == "") {
        jogo[1][1] = "O";
      } else if (jogo[0][1] == "0" && jogo[2][1] == "0" && jogo[1][1] == "") {
        jogo[1][1] = "O";
      } else if (jogo[1][1] == "0" && jogo[1][0] == "0" && jogo[1][2] == "") {
        jogo[1][2] = "O";
      } else if (jogo[0][1] == "0" && jogo[1][1] == "0" && jogo[2][1] == "") {
        jogo[2][1] = "O";
      } else if (jogo[1][1] == "0" && jogo[1][2] == "0" && jogo[1][0] == "") {
        jogo[1][0] = "O";
      } else if (jogo[1][1] == "0" && jogo[2][1] == "0" && jogo[0][1] == "") {
        jogo[0][1] = "O";
      } else if (jogo[1][0] == "0" && jogo[1][2] == "0" && jogo[1][0] == "") {
        jogo[1][1] = "O";
      } else {
        if (jogada < 8) {
          do {
            l = Math.round(Math.random() * 2);
            c = Math.round(Math.random() * 2);
          } while (jogo[l][c] != "");
          jogo[l][c] = "O";
        } else {
          for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
              if (jogo[i][j] == "") {
                jogo[i][j] = "O";
              }
            }
          }
        }
      }
    }
    verifica = verificaVitoria();
    atualizaTabu();
    if (verifica != "") {
      alert('"' + verifica + '"  Venceu');
      jogando = false;
    } else {
      if (jogada == 8) {
        alert("Empatou");
        jogando = false;
      } else {
        jogada++;
        quemJoga = 0;
      }
    }
  }
}
function verificaVitoria() {
  var l, c;
  //linhas
  for (l = 0; l < 3; l++) {
    if (jogo[l][0] == jogo[l][1] && jogo[l][1] == jogo[l][2]) {
      return jogo[l][0]; // qualquer posiçao ira retornar o simbolo
    }
  }
  //colunas
  for (c = 0; c < 3; c++) {
    if (jogo[0][c] == jogo[1][c] && jogo[1][c] == jogo[2][c]) {
      return jogo[0][c];
    }
  }
  //diagonais
  if (jogo[0][0] == jogo[1][1] && jogo[1][1] == jogo[2][2]) {
    return jogo[0][0];
  }
  if (jogo[0][2] == jogo[1][1] && jogo[1][1] == jogo[2][0]) {
    return jogo[0][2];
  }
  return ""; // se nao teve linha, coluna ou diagonal igual retorna vazio, indicando sem vencedor
}
function jogar(p) {
  // posiçao que jogador jogou
  if (jogando && quemJoga == 0) {
    // se jogando ta rolando e quem joga é 0(jogador)
    switch (p) {
      case 1:
        if (jogo[0][0] == "") {
          jogo[0][0] = "X";
          quemJoga = 1;
        }
        break;
      case 2:
        if (jogo[0][1] == "") {
          jogo[0][1] = "X";
          quemJoga = 1;
        }
        break;
      case 3:
        if (jogo[0][2] == "") {
          jogo[0][2] = "X";
          quemJoga = 1;
        }
        break;
      case 4:
        if (jogo[1][0] == "") {
          jogo[1][0] = "X";
          quemJoga = 1;
        }
        break;
      case 5:
        if (jogo[1][1] == "") {
          jogo[1][1] = "X";
          quemJoga = 1;
        }
        break;
      case 6:
        if (jogo[1][2] == "") {
          jogo[1][2] = "X";
          quemJoga = 1;
        }
        break;
      case 7:
        if (jogo[2][0] == "") {
          jogo[2][0] = "X";
          quemJoga = 1;
        }
        break;
      case 8:
        if (jogo[2][1] == "") {
          jogo[2][1] = "X";
          quemJoga = 1;
        }
        break;
      case 9:
        if (jogo[2][2] == "") {
          jogo[2][2] = "X";
          quemJoga = 1;
        }
        break;
    }
    if (quemJoga == 1) {
      // se eu clicar num O ele n funciona pois nessa posiçao quemJoga=0, se clicar num"" quemJoga=1 loga ira funcionar
      atualizaTabu();
      verifica = verificaVitoria();
      if (verifica != "") {
        alert('"' + verifica + '"  Venceu');
        jogando = false;
        /*if (verifica == "X") {
          contX++;// vitorias usuario
        } else{
          contO++;// vitorias cpu
        */
      } else {
        if (jogada == 8) {
          alert("Empatou");
          jogando = false;
          //contE++// empate
        } else {
          jogada++;
          cpuJoga();
        }
      }
    }
  }
}
function atualizaTabu() {
  for (var l = 0; l < 3; l++) {
    for (var j = 0; j < 3; j++) {
      if (jogo[l][j] == "X") {
        tabuleiro[l][j].innerHTML = "X";
        tabuleiro[l][j].style.cursor = "default";
      } else if (jogo[l][j] == "O") {
        tabuleiro[l][j].innerHTML = "O";
        tabuleiro[l][j].style.cursor = "default";
      } else {
        tabuleiro[l][j].innerHTML = "";
        tabuleiro[l][j].style.cursor = "pointer";
      }
    }
  }
}
function inicia() {
  jogando = true;
  jogadaCpu = 1;
  jogada = 0;
  jogo = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  // tabuleiro sera parte visual da div , ou seja tab[0][0].innerHTML = jogo[0][0];
  tabuleiro = [
    [
      document.getElementById("p1"),
      document.getElementById("p2"),
      document.getElementById("p3"),
    ],
    [
      document.getElementById("p4"),
      document.getElementById("p5"),
      document.getElementById("p6"),
    ],
    [
      document.getElementById("p7"),
      document.getElementById("p8"),
      document.getElementById("p9"),
    ],
  ];
  atualizaTabu(); // ira verificar que jogo está "" e ira atualizar
  if (quemComeca == 1) {
    quemComeca = 0;
    quemJoga = quemComeca;
    document.getElementById("dvQuemComeca").innerHTML = "Quem Começa: Jogador";
  } else {
    quemComeca = 1;
    quemJoga = 1;
    cpuJoga();
    document.getElementById("dvQuemComeca").innerHTML = "Quem Começa: CPU";
  }
}

window.addEventListener("load", inicia);
