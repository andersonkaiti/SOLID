import { ICadastroProduto } from "./Interfaces/ICadastroProduto";

export class CadastroProduto implements ICadastroProduto {
  validarDados(): void {
    console.log("Validar dados");
  }

  salvarBanco(): void {
    console.log("Salvar banco");
  }
}
