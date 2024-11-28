import { EmailServices } from "./EmailServices";
import { CPFServices } from "./CPFServices";

export class Cliente {
  public id: number = 0;
  public nome: string = "";
  public email: string = "";
  public cpf: string = "";

  isValid() {
    const emailServices = new EmailServices();
    const cpfServices = new CPFServices();

    return emailServices.isValid(this.email) && cpfServices.isValid(this.cpf);
  }
}
