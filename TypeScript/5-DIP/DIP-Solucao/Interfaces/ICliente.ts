import { IEmailServices } from "./IEmailServices";
import { ICPFServices } from "./ICPFServices";

export interface ICliente {
  id: number;
  nome: string;
  email: string;
  cpf: string;
  isValid(): boolean;
  emailService: IEmailServices;
  cpfService: ICPFServices;
}
