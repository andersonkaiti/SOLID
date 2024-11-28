import { ICadastro } from "./ICadastro";

export class CadastroCliente implements ICadastro {
  validarDados(): void {
    console.log("Validar dados");
  }

  salvarBanco(): void {
    console.log("Salvar banco");
  }

  enviarEmail(): void {
    console.log("Enviar email");
  }
}
