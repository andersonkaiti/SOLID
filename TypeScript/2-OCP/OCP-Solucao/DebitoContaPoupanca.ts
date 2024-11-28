import { DebitoConta } from "./DebitoConta";

export class DebitoContaPoupança extends DebitoConta {
  debitar(valor: number, conta: string): string {
    console.log("Débito conta Poupança => ");

    return this.formatarTransação();
  }
}
