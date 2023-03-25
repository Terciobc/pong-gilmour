var meusPontos = 0;
var pontosDoOponente = 0;

function criaPlacar(){
  stroke(255)
  textAlign(CENTER)
  textSize(30)
  text(meusPontos, 200, 50)
  text(pontosDoOponente, 400, 50)
}

function incluiPlacar(){
  if(xBolinha < 10){
    pontosDoOponente += 1
    ponto.play()
    
  }
  if(xBolinha > 590){
    meusPontos += 1
    ponto.play()
    
  }
}