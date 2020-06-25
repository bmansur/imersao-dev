class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);

    this.yInicial = height - this.altura - this.variacaoY;

    this.velocidadeDoPulo = 0;
    this.gravidade = 6;
    this.alturaDoPulo = -60;
    this.pulos = 0;
  }

  pula() {
    if (this.pulos < 2) {
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.pulos++;
    }
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

    if (this.y > this.yInicial) {
      this.y = this.yInicial;
      this.pulos = 0;
    }
  }

  estaColidindo(inimigo) {
    const precisao = .7;

    return collideCircleCircle(
      this.x + this.largura / 2,
      this.y + this.altura / 2,
      (this.altura + this.largura) * precisao / 2,
      inimigo.x + inimigo.largura / 2,
      inimigo.y + inimigo.altura / 2,
      (inimigo.altura + inimigo.largura) * precisao / 2
    );
  }

}