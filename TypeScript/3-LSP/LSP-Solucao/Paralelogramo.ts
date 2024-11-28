export abstract class Paralelogramo {
  constructor(protected altura: number, protected largura: number) {}

  area(): number {
    return this.altura * this.largura;
  }
}
