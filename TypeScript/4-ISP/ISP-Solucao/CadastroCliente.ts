import { ICadastroCliente } from "./Interfaces/ICadastroCliente";

export class CadastroCliente implements ICadastroCliente {
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
