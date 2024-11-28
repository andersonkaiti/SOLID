import { ICliente, ICPFServices, IEmailServices } from "./Interfaces";

export class Cliente implements ICliente {
  public emailService: IEmailServices;
  public cpfService: ICPFServices;
  public id: number;
  public nome: string;
  public email: string;
  public cpf: string;

  constructor(emailService: IEmailServices, cpfService: ICPFServices) {
    this.id = 0;
    this.nome = "";
    this.email = "";
    this.cpf = "";
    this.emailService = emailService;
    this.cpfService = cpfService;
  }

  isValid() {
    return (
      this.emailService.isValid(this.email) && this.cpfService.isValid(this.cpf)
    );
  }
}
