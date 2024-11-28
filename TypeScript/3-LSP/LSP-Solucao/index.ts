import { CalculoArea } from "./CalculoArea";
import { Quadrado } from "./Quadrado";
import { Retangulo } from "./Retangulo";

const quadrado = new Quadrado(5, 5);
console.log(quadrado);
CalculoArea.obterArea(quadrado);

const retangulo = new Retangulo(5, 6);
console.log(retangulo);
CalculoArea.obterArea(retangulo);
