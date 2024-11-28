export abstract class DebitoConta {
  public numeroTransação?: string;

  abstract debitar(valor: number, conta: string): string;

  formatarTransação(): string {
    return "Número Transação";
  }
}
