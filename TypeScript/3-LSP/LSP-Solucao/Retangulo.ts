import { Paralelogramo } from "./Paralelogramo";

export class Retangulo extends Paralelogramo {
  constructor(public altura: number, public largura: number) {
    super(altura, largura);
  }
}
