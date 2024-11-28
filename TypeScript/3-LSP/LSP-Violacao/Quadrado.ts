import { Retangulo } from "./Retangulo";

export class Quadrado extends Retangulo {
  set setAltura(value: number) {
    this.largura = this.altura = value;
  }

  set setLargura(value: number) {
    this.largura = this.altura = value;
  }
}
