import { Cliente } from "./Cliente";
import { ClienteRepository } from "./ClienteRepository";
import { EmailServices } from "./EmailServices";

export class ClienteService {
  adicionarCliente(cliente: Cliente): string {
    if (!cliente.isValid()) {
      return "Dados inválidos";
    }

    const repository = new ClienteRepository();
    repository.adicionarCliente(cliente);

    const emailServices = new EmailServices();
    emailServices.enviar(
      "empresa@empresa.com",
      cliente.nome,
      cliente.email,
      "Bem-vindo",
      "Parabéns, você está cadastrado!"
    );

    return "ClienteService: Cliente cadastrado com sucesso";
  }
}
