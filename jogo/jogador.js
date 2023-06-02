class Jogador{ 
  
    //classe utilizada para definir o tamanho, velocidade e movimentação do jogador
  
    constructor(){
  this.imagem = loadImage('jogo/imgjogo/saco.png');
  this.posY = 305;
  this.posX = 300;
  this.velocidade = 10;
  this.largura = 120;
  this.altura = 80;
  } 
  
  mova(){
    
    //permite a movimentação do jogador
  
    image(this.imagem,this.posX,this.posY,this.largura,this.altura);
  if((keyIsDown(39)) && (this.xFinal< 600)){
  this.posX += this.velocidade;
  }
    
  if((keyIsDown(37)) && (this.xInicial> 0)){
  this.posX -= this.velocidade;
  }
    
  //posição das frutas que caem
    
  this.xInicial = this.posX
  this.xFinal = this.posX + this.largura
  this.yInicial = this.posY
  this.yFinal = this.posY + this.altura
  }
  }