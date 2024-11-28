import { Paralelogramo } from "./Paralelogramo";

export class CalculoArea {
  static obterArea(retangulo: Paralelogramo): void {
    console.log(`Cálculo da área -> ${retangulo.area()}`);
  }
}
