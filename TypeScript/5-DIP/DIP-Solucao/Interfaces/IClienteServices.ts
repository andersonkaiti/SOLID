import { ICliente } from "./ICliente";

export interface IClienteServices {
  adicionarCliente(cliente: ICliente): string;
}
