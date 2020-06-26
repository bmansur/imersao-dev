class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = fita.mapa;
  }

  setup() {
    cenario = new Cenario(imagemCenario, 3);
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
    pontuacao = new Pontuacao();
    
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);

    inimigos.push(new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10));
    inimigos.push(new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10));
    inimigos.push(new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width * 2, 0, 200, 200, 400, 400, 15));
  }

  keyPressed(keyCode) {
    if (keyCode === 32) {
      personagem.pula();
      somDoPulo.play();
    }
  }

  draw() {
    cenario.exibe();
    cenario.move();
    
    vida.draw();

    pontuacao.exibe();
    pontuacao.adicionaPontos();

    personagem.exibe();
    personagem.aplicaGravidade();
    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {
      this.indice++;
      inimigo.aparece();
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
      inimigo.velocidade = linhaAtual.velocidade;
    }

    if (personagem.estaColidindo(inimigo)) {
      vida.perdeVida();
      personagem.ficarInvencivel();
      if(vida.vidas === 0){
        image(imagemGameOver, width / 2 - 200, height / 2);
        noLoop();
      }
    }
  }
}