function setup() {
  createCanvas(600, 400); 
  trilha.play()
}

function draw() {
  background(imagem);
  criaBolinha()
  movimentaBolinha();
  verificaColisaoBordas();
  criaRaquete();  
  movimentaRaquete();
  colisaoComRaquete()
  movimentaRaqueteOponente()
  incluiPlacar();
  criaPlacar();
  bolinhaNaoFicaPresa()
}

// variáveis dos sons/imagens do jogo:
var raquetada;
var ponto;
var trilha;
var imagem

function preload(){
  ponto = loadSound("assets/ponto.mp3")
  raquetada = loadSound("assets/raquetada.mp3")
  trilha = loadSound("assets/trilha.mp3")
  imagem = loadImage("assets/gilmour.jpg")
}

