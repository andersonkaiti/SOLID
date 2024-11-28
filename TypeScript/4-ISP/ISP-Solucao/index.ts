import { CadastroCliente } from "./CadastroCliente";
import { CadastroProduto } from "./CadastroProduto";

console.log("CadastroCliente");

const cadastroCliente = new CadastroCliente();
cadastroCliente.validarDados();
cadastroCliente.salvarBanco();
cadastroCliente.enviarEmail();

console.log("CadastroProduto");

const cadastroProduto = new CadastroProduto();
cadastroProduto.validarDados();
cadastroProduto.salvarBanco();
