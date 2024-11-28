import { Cliente } from "./Cliente";

export class ClienteRepository {
  adicionarCliente(cliente: Cliente): void {
    const sql = `
        INSERT INTO cliente
            (nome, email, cpf)
        VALUES
            (?, ?, ?, ?)
    `;

    console.log("ClienteRepository: Cliente adicionado.");
  }
}
