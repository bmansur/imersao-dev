class Personagem extends Animacao {
  constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite);

    this.yInicial = height - this.altura;

    this.velocidadeDoPulo = 0;
    this.gravidade = 5;
    this.contaPulos = 0;
  }

  pula() {
    if (this.contaPulos >= 2 && this.y != this.yInicial) {
      this.contaPulos = 0;
      return;
    }
    this.velocidadeDoPulo = -30;
    this.contaPulos++;
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

    if (this.y > this.yInicial) {
      this.y = this.yInicial;
    }
  }

  estaColidindo(inimigo) {
    const precisao = .7;

    const colidiu = collideRectRect(
      this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    );

    return colidiu;
  }

}