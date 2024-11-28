import { DebitoContaCorrente } from "./DebitoContaCorrente";
import { DebitoContaPoupança } from "./DebitoContaPoupanca";

const debitoContaCorrente = new DebitoContaCorrente();
console.log(debitoContaCorrente.debitar(1, "1"));

const debitoContaPoupança = new DebitoContaPoupança();
console.log(debitoContaPoupança.debitar(1, "1"));
