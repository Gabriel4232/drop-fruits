function executarJogo(){
    background(fundo);
    player.mova();
    frutas01[0].mova();
    for(let i=0;i<frutas01.length;i++){
    frutas01[i].mova();
    if(frutas01[i].posY > 600){
    frutas01[i] = new Frutas(frutas01[i].posY);
    }
    
      // condição da pontuação
    
    if( 
    player.xInicial<frutas01[i].xFinal &&
    player.xFinal>frutas01[i].xInicial &&
    player.yInicial<frutas01[i].yFinal &&
    player.yFinal>frutas01[i].yInicial
    
    ){ erb.play();
    if(
    frutas01[i].imagem == frutas [3]
    ){frutas01[i] = new Frutas  (frutas01[i].posY)
    pontos = 0
    sombomba.play()
    } 
    else{
    frutas01[i] = new Frutas (frutas01[i].posY);
    pontos ++
    } 
    
    frutas01[i] = new Frutas(frutas01[i].posY)
    } 
    
    //texto da pontuação na tela
    text("Pontos = " + pontos, 10, 20)
    
    }
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
  }