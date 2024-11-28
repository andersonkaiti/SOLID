export class DebitoConta {
  private CORRENTE: number = 1;
  private POUPANÇA: number = 2;

  debitar(valor: number, conta: string, tipo: number): void {
    if (tipo === this.CORRENTE) {
      console.log("Corrente");
    }

    if (tipo === this.POUPANÇA) {
      console.log("Poupança");
    }
  }
}
