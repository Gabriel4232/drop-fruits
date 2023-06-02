class Frutas{ //classe das frutas, que define o tamanho, velocidade e a posição que caem
    constructor(){
    this.imagem = frutas[int(random(0,3.9))];
    this.posX = random(0,400)
    this.posY = 0;
    this.velocidade = random(1,5) + pontos + 1;
    this.largura = 45;
    this.altura = 45;
    this.yInicial = this.posY - this.altura;
    this.yFinal = this.posY + this.altura;
    this.xInicial = this.posX;
    } 
      
    mova(){ //movimentação dos itens verticalmente
    this.posY += this.velocidade
    image(this.imagem, this.posX,this.posY, this.largura, this.altura);
    this.yInicial = this.posY
    this.yFinal = this.posY + this.altura
    this.xInicial = this.posX
    this.xFinal = this.posX + this.largura
    }
    }