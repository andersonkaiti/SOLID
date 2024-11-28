import { ICPFServices } from "./Interfaces";

export class CPFServices implements ICPFServices {
  isValid(cpf: string): boolean {
    return cpf.length === 11;
  }
}
