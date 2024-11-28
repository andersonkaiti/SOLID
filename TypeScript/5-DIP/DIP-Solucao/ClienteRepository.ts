import { ICliente } from "./Interfaces";

export class ClienteRepository {
  adicionarCliente(cliente: ICliente): void {
    console.log("ClienteRepository: Cliente adicionado.");
  }
}
