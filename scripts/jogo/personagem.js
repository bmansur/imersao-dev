class Personagem {
  constructor(imagem) {
    this.imagem = imagem;
    this.tamX = 220;
    this.tamY = 270;
    this.quantidadeLinhas = 4;
    this.quantidadeColunas = 4;
    this.frameAtual = 0;
  }
  
  exibe() {
    let x = this.frameAtual % this.quantidadeColunas * this.tamX;
    let y = Math.floor(this.frameAtual / this.quantidadeLinhas) * this.tamY;
    
    image(this.imagem, 0, height - 135, 110, 135, x, y, this.tamX, this.tamY);
  }
  
  anima() {
    this.frameAtual ++;
    
    if(this.frameAtual >= this.quantidadeColunas * this.quantidadeLinhas){
      this.frameAtual = 0;
    }
  }
}