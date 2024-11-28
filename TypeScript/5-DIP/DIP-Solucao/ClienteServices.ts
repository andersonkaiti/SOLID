import { ICliente } from "./Interfaces";
import {
  IClienteRepository,
  IClienteServices,
  IEmailServices,
} from "./Interfaces";

export class ClienteServices implements IClienteServices {
  private emailService: IEmailServices;
  private clienteRepository: IClienteRepository;

  constructor(
    emailService: IEmailServices,
    clienteRepository: IClienteRepository
  ) {
    this.emailService = emailService;
    this.clienteRepository = clienteRepository;
  }

  adicionarCliente(cliente: ICliente): string {
    if (!cliente.isValid()) {
      return "Dados inválidos";
    }

    this.clienteRepository.adicionarCliente(cliente);

    this.emailService.enviar(
      "empresa@empresa.com",
      cliente.nome,
      cliente.email,
      "Bem-vindo",
      "Parabéns, você está cadastrado!"
    );

    return "Cliente cadastrado com sucesso";
  }
}
