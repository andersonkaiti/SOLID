import { Paralelogramo } from "./Paralelogramo";

export class Quadrado extends Paralelogramo {
  constructor(public altura: number, public largura: number) {
    super(altura, largura);

    if (this.largura !== this.altura) {
      throw new Error("Os dois lados do quadrado precisam ser iguais");
    }
  }
}
