import { TipoAeronave } from "../enums/TipoAeronave";

import { Peca } from "./Peca";
import { Etapa } from "./Etapa";
import { Teste } from "./Teste";

export class Aeronave {
  public pecas: Peca[] = [];
  public etapas: Etapa[] = [];
  public testes: Teste[] = [];

  constructor(
    public codigo: string,
    public modelo: string,
    public tipo: TipoAeronave,
    public capacidade: number,
    public alcance: number
  ) {}

  adicionarPeca(peca: Peca): void {
    this.pecas.push(peca);
  }

  adicionarEtapa(etapa: Etapa): void {
    this.etapas.push(etapa);
  }

  adicionarTeste(teste: Teste): void {
    this.testes.push(teste);
  }

  exibirDetalhes(): void {
    console.log("=== AERONAVE ===");
    console.log(`Código: ${this.codigo}`);
    console.log(`Modelo: ${this.modelo}`);
    console.log(`Tipo: ${this.tipo}`);
    console.log(`Capacidade: ${this.capacidade}`);
    console.log(`Alcance: ${this.alcance} km`);

    console.log("\nPeças:");
    this.pecas.forEach((p, i) => {
      console.log(`${i + 1}. ${p.nome}`);
    });

    console.log("\nEtapas:");
    this.etapas.forEach((e, i) => {
      console.log(`${i + 1}. ${e.nome} - ${e.status}`);
    });

    console.log("\nTestes:");
    this.testes.forEach((t, i) => {
      console.log(`${i + 1}. ${t.tipo} - ${t.resultado}`);
    });
  }

  // FINALIZAR ETAPA COM VALIDAÇÃO DE ORDEM
finalizarEtapa(indice: number): void {
  if (indice < 0 || indice >= this.etapas.length) {
    console.log("❌ Etapa inválida.");
    return;
  }

  // verifica etapa anterior
  if (indice > 0 && this.etapas[indice - 1].status !== "CONCLUIDA") {
    console.log("❌ Finalize a etapa anterior primeiro!");
    return;
  }

  this.etapas[indice].finalizar();
}
}