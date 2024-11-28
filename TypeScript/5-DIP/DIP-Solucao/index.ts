import { Cliente } from "./Cliente";
import { ClienteRepository } from "./ClienteRepository";
import { ClienteServices } from "./ClienteServices";
import { CPFServices } from "./CPFServices";
import { EmailServices } from "./EmailServices";

const clienteRepository = new ClienteRepository();
const emailService = new EmailServices();
const cpfService = new CPFServices();

const clienteService = new ClienteServices(emailService, clienteRepository);
const cliente = new Cliente(emailService, cpfService);

cliente.cpf = "11111111111";
cliente.nome = "Anderson";
cliente.email = "anderkaiti@gmail.com";

console.log(clienteService.adicionarCliente(cliente));
