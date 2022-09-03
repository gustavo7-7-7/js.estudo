var biblioteca = [
  "javascript",
  "curso",
  "computador",
  "transporte",
  "livraria",
  "tecnologia",
  "controle",
  "churrasco",
  "brasil",
  "monitor",
  "brinquedo",
  "youtube",
  "portaria",
  "escola",
  "carnaval",
  "teclado",
  "guitarra",
  "bateria",
  "chinelo",
  "helicoptero",
];// palavras possiveis do jogo
var qtde = biblioteca.length - 1;
var pos = Math.round(Math.random() * qtde);
var palavra = biblioteca[pos];
var tam = palavra.length;
var cxLetras = [];
var acertos;
var errosMax = 7;
var erros = 0;
var desenhos = [];
var acertou = false;
var jogando = false;
var jog;

function defineLetras(l) {// vai pegar a var tam(palavra.length) e usar para definir quantas letras ira aparecer.
  var obj;
  for (var i = 0; i < 20; i++) {
    obj = document.getElementById("letra" + i).value = "";
    obj = document.getElementById("letra" + i).style.display = "none";// inicialmente defini todas as letras no caso 20 no exemplo com display none para nao aparecer, 
  }
  for (var i = 0; i < l; i++) {
    obj = document.getElementById("letra" + i).style.display = "inline-block";// agora defini as letras necessarias que irao aparecer uma do lado da outra de acordo com o tam da palavra sorteada
  }
}
function jogar() {
  jog.focus();
  if (jog.value == "") {
    alert("Digite um valor");
  } else {
    if (jogando) {// se jogando for false so consegue jogar clicando no botao "Nova palavra" que recebe onclick inicia(), eae define o jogando como true
      var obj;
      var letraTmp;
      var letra;
      var pesq;
      letra = jog.value;// armazena na variavel
      jog.value = "";// limpa o conteudo do campo apos armazenar na variavel, por isso ao clicar em jogar ela limpa a janela de input de letras
      acertou = false;
      pesq = palavra.match(letra);//verificar se a letra inserida tem ocorrencia na palavra sorteada

      while (pesq != null) {
        letraTmp = palavra.search(letra);// pesquisa da letra na  palavra para retornar a sua posiçao ex: palavra.search(a)//livraria(4 na primeira pesquisa, na segunda 7)
        obj = document.getElementById("letra" + letraTmp).value = letra;//letra4 valor a; letra 7 valora no exemplo livraria
        palavra = palavra.replace(letra, "0");  //substitui pelo zero para que na proxima while o search informe o letra 7 :a, n o letra 4: a
        acertos++;// incremento de acordo com os inputs
        pesq = palavra.match(letra);// condicional para que quando n tiver mais letras para achar todas tiverem ja em obj, e deps atribuidas a 0 para sair do while
        acertou = true; // atribui no acertou para o if abaixo nao rolar
      }
      if (!acertou) {// se nao acertou 
        document.getElementById("dvletrasdigitadas").innerHTML +=
          letra.toUpperCase();// vai adiciona no letras digitadas a letra errada 
        erros++;// adicionar nos erro
        if (erros < 7) {
          desenhos[erros].style.display = "block";// display de desenhos deixa de ser none, eae vai na ordem erro desenho[1] cabeça, desenho[2] corpo
        } else {
          document.getElementById("cabeca").src = "imgs/cabeca2.png";
          document.getElementById("dvmsg").innerHTML = "PERDEU";
          jogando = false;// joga para eae so inicia clicando no botao inicia para jogando igual true
        }
      }
      if (acertos == tam) {// acertos incrementados == tamanho da palavra ou seja escreveu a palavra toda , logo ganhou
        document.getElementById("dvmsg").innerHTML = "GANHOU";
        jogando = false; // joga para eae so inicia clicando no botao inicia para jogando igual true
      }
    }
  }
}
function inicia() {// renderizar e inicializar as variaveis
  jogando = true;
  jog = document.getElementById("letraJ");// recebe a letra do usuario
  jog.value = "";
  jog.focus();// cursor esta nela
  acertos = 0;
  erros = 0;
  acertou = false;
  document.getElementById("dvletrasdigitadas").innerHTML = "Letras Digitadas:";// para zerar as letras escritas ao digitar novamente importante setar a div na inicialização
  pos = Math.round(Math.random() * qtde);
  palavra = biblioteca[pos];
  tam = palavra.length;
  defineLetras(tam);
  document.getElementById("dvmsg").innerHTML = "";// ganhou ou perdeu
  desenhos[1] = document.getElementById("cabeca");// imagens a serem mostradas armazenadas nas variaveis 
  desenhos[2] = document.getElementById("corpo");
  desenhos[3] = document.getElementById("bracoE");
  desenhos[4] = document.getElementById("bracoD");
  desenhos[5] = document.getElementById("pernaE");
  desenhos[6] = document.getElementById("pernaD");
  document.getElementById("cabeca").src = "imgs/cabeca1.png";// inicialmente para o cabeça1
  for (var i = 1; i < 7; i++) {
    desenhos[i].style.display = "none";// ocultou as 6 peças de desenho
  }
}

function dica() {
  alert(palavra);
  jog.focus();
}

window.addEventListener("load", inicia);
