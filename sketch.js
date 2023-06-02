//variáveis
let fundo;
let player;
let frutas = [];
let frutas01 = [];
let pontos = 0;
let sombomba;
let bomb;
let erb;
let imgAbertura;
let controleTela = "INICIO";


function setup() { //define o tamanho da tela do jogo
createCanvas(600, 400).parent("cjogo");
}

function preload(){ //guarda as informações em variáveis
fundo = loadImage('jogo/imgjogo/mercado.jpg');
jogador = loadImage('jogo/imgjogo/carrinho-removebg-preview.png');
frutas[0]= loadImage('jogo/imgjogo/manga1.png')
frutas[1] = loadImage('jogo/imgjogo/banana1.png')
frutas[2] = loadImage('jogo/imgjogo/maçâ.png')
imgAbertura = loadImage ('img/teladeinicio.jpg')
imgFinal = loadImage ('img/DROP.gif') 

  //bomba aqui

  frutas[3] = loadImage("jogo/imgjogo/bomba.png")
player = new Jogador();
frutas01[0] = new Frutas();
frutas01[1] = new Frutas();
frutas01[2] = new Frutas();
frutas01[3] = new Frutas();
sombomba = loadSound('audio/bomb.mp3')
erb = loadSound('audio/erb.mp3')
}

function keyPressed(){
  if(keyCode==13){
   controleTela = "JOGO";
  }
 }
 
 
 function draw() {
 
 
  if(controleTela == "INICIO"){
     mostraAbertura();
   } if(controleTela == "JOGO"){
     executarJogo();
   }if(controleTela == ("MORTE")){
     mostraFinal();
   }
   if(keyIsDown(13)){
   controleTela = ("JOGO")
   }
  //mostra na tela as informações guardadas nas variáveis


}