// Variável de colisão:
var colidiu = false;

function verificaColisaoBordas(){
  if(xBolinha >= width - raio || xBolinha < 0 + raio){
   velocidadeXBolinha *=-1
  }
  if(yBolinha > height - raio || yBolinha < 0 + raio ){
    velocidadeYBolinha *= -1
  }
}
function colisaoComRaquete(){ 
  colidiu = collideRectCircle(xRaquete, yRaquete, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio)
  if(colidiu){
    velocidadeXBolinha *= -1
    raquetada.play()
  }
  colidiu = collideRectCircle(xRaquete2, yRaquete2, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio)
  if(colidiu){
    velocidadeXBolinha *= -1
    raquetada.play()
  }
}
  
