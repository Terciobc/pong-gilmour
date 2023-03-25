// Variáveis da raquete:
var xRaquete = 5
var yRaquete = 150
var raqueteComprimento = 10;
var raqueteAltura = 90

// Variáveis da raquete do oponente:
var xRaquete2 = 585
var yRaquete2 = 150
var velocidadeYOponente;
var chanceDeErrar = 0;

function criaRaquete(){
  rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura)
  rect(xRaquete2, yRaquete2, raqueteComprimento, raqueteAltura)
}
function movimentaRaquete(evento){
    if(keyIsDown(UP_ARROW) || keyIsDown(87)){
      yRaquete -= 5
      if(yRaquete < 0){
        yRaquete = 0
      }
    }if(keyIsDown(DOWN_ARROW) || keyIsDown(83)){
      yRaquete += 5
      if(yRaquete > 310){
        yRaquete = 310} 
  }
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaquete2 - raqueteComprimento/2 - 30;
  yRaquete2 += velocidadeYOponente + chanceDeErrar;
  if(yRaquete2 > 310){
      yRaquete2 = 310;
    }
  if(yRaquete2 < 0){
    yRaquete2 = 0     
  }
  calculaChanceDeErrar()
}

function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}
