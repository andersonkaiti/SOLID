export interface IEmailServices {
  isValid(email: string): boolean;
  enviar(
    de: string,
    nome: string,
    para: string,
    assunto: string,
    mensagem: string
  ): void;
}
