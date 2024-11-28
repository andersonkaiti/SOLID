export class CPFServices {
  isValid(cpf: string): boolean {
    return cpf.length === 11;
  }
}
