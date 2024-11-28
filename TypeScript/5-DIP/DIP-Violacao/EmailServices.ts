export class EmailServices {
  isValid(email: string): boolean {
    return email.includes("@");
  }

  enviar(
    de: string,
    nome: string,
    para: string,
    assunto: string,
    mensagem: string
  ): void {
    // const email = new Email();
    // email.destinatario(this.nome, this.email);
    // email.assunto("Bem-vindo!");
    // email.mensagem("Parabéns! Você está cadastrado!");
    // email.enviar();

    console.log("EmailServices: Email enviado");
  }
}
