import { NivelPermissao } from "../enums/NivelPermissao";

export class Funcionario {
  constructor(
    public id: number,
    public nome: string,
    public telefone: string,
    public endereco: string,
    public usuario: string,
    private senha: string,
    public nivelPermissao: NivelPermissao
  ) {}

  autenticar(usuario: string, senha: string): boolean {
    if (this.usuario === usuario && this.senha === senha) {
      console.log("✅ Login realizado com sucesso!");
      return true;
    }

    console.log("❌ Usuário ou senha inválidos.");
    return false;
  }

  exibirDetalhes(): void {
    console.log("=== FUNCIONÁRIO ===");
    console.log(`ID: ${this.id}`);
    console.log(`Nome: ${this.nome}`);
    console.log(`Telefone: ${this.telefone}`);
    console.log(`Endereço: ${this.endereco}`);
    console.log(`Usuário: ${this.usuario}`);
    console.log(`Permissão: ${this.nivelPermissao}`);
  }
}