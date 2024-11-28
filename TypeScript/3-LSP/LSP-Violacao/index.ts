import { Quadrado } from "./Quadrado";
import { Retangulo } from "./Retangulo";

const retangulo = new Retangulo();
retangulo.setLargura = 10;
retangulo.setAltura = 5;
imprimir(retangulo);
verificar(retangulo);

const quadrado = new Quadrado();
quadrado.setLargura = 10;
quadrado.setAltura = 5;
imprimir(quadrado);
verificar(quadrado);

function imprimir(retangulo: Retangulo) {
  console.log("Cálculo da área do Retângulo");
  console.log(`Altura -> ${retangulo.altura}`);
  console.log(`Largura -> ${retangulo.largura}`);
  console.log(`Área -> ${retangulo.area()}`);
}

function verificar(retangulo: Retangulo) {
  if (retangulo.area() != 50) {
    throw new Error("Área errada!");
  }

  return true;
}
