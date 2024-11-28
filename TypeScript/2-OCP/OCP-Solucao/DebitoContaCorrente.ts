import { DebitoConta } from "./DebitoConta";

export class DebitoContaCorrente extends DebitoConta {
  debitar(valor: number, conta: string): string {
    console.log("Débito conta corrente => ");

    return this.formatarTransação();
  }
}
