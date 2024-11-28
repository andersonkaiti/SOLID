export class Retangulo {
  public largura: number = 0;
  public altura: number = 0;

  set setAltura(altura: number) {
    this.altura = altura;
  }

  set setLargura(largura: number) {
    this.largura = largura;
  }

  area(): number {
    return this.largura * this.altura;
  }
}
