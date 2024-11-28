import { Cliente } from "./Cliente";
import { ClienteService } from "./ClienteService";

const clienteService = new ClienteService();

const cliente = new Cliente();

cliente.cpf = "11111111111";
cliente.nome = "Anderson";
cliente.email = "anderkaiti@gmail.com";

console.log(clienteService.adicionarCliente(cliente));
