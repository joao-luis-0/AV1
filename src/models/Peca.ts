import { TipoPeca } from "../enums/TipoPeca";
import { StatusPeca } from "../enums/StatusPeca";

export class Peca {
  constructor(
    public nome: string,
    public tipo: TipoPeca,
    public fornecedor: string,
    public status: StatusPeca
  ) {}

  atualizarStatus(novoStatus: StatusPeca): void {
    this.status = novoStatus;
  }

  exibirDetalhes(): void {
    console.log("=== PEÇA ===");
    console.log(`Nome: ${this.nome}`);
    console.log(`Tipo: ${this.tipo}`);
    console.log(`Fornecedor: ${this.fornecedor}`);
    console.log(`Status: ${this.status}`);
  }
}