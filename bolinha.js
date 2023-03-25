// Variáveis da bolinha:
var xBolinha = 300;
var yBolinha = 200;
var diametro = 20;
var raio = diametro/2;

// Velocidades da bolinha:
var velocidadeYBolinha = 6
var velocidadeXBolinha = 6

function criaBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function bolinhaNaoFicaPresa(){
  if (xBolinha + raio <= 0){
    xBolinha = 300;
    }
}
