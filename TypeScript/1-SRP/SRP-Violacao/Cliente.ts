class Cliente {
  constructor(
    public id: number,
    public nome: string,
    public email: string,
    public cpf: string
  ) {}

  adicionarCliente(): string {
    if (!this.email.includes("@")) {
      return "Cliente com e-mail inválido";
    }

    if (this.cpf.length != 11) {
      return "Cliente com CPF inválido";
    }

    const sql = `
        INSERT INTO cliente
            (nome, email, cpf)
        VALUES
            (?, ?, ?, ?)
    `;

    // const email = new Email();
    // email.destinatario(this.nome, this.email);
    // email.assunto("Bem-vindo!");
    // email.mensagem("Parabéns! Você está cadastrado!");
    // email.enviar();

    return "Cliente cadastrado com sucesso!";
  }
}
