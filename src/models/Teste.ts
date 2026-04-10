import { TipoTeste } from "../enums/TipoTeste";
import { ResultadoTeste } from "../enums/ResultadoTeste";

export class Teste {
  constructor(
    public tipo: TipoTeste,
    public resultado: ResultadoTeste
  ) {}

  exibirDetalhes(): void {
    console.log("=== TESTE ===");
    console.log(`Tipo: ${this.tipo}`);
    console.log(`Resultado: ${this.resultado}`);
  }
}