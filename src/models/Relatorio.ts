import * as fs from "fs";
import { Aeronave } from "./Aeronave";

export class Relatorio {
  gerar(aeronave: Aeronave): void {
    let conteudo = "";

    conteudo += "=== RELATÓRIO FINAL ===\n\n";

    conteudo += `Código: ${aeronave.codigo}\n`;
    conteudo += `Modelo: ${aeronave.modelo}\n`;
    conteudo += `Tipo: ${aeronave.tipo}\n`;
    conteudo += `Capacidade: ${aeronave.capacidade}\n`;
    conteudo += `Alcance: ${aeronave.alcance} km\n\n`;

    conteudo += "Peças:\n";
    aeronave.pecas.forEach((p, i) => {
      conteudo += `${i + 1}. ${p.nome} - ${p.status}\n`;
    });

    conteudo += "\nEtapas:\n";
    aeronave.etapas.forEach((e, i) => {
      conteudo += `${i + 1}. ${e.nome} - ${e.status}\n`;
    });

    conteudo += "\nTestes:\n";
    aeronave.testes.forEach((t, i) => {
      conteudo += `${i + 1}. ${t.tipo} - ${t.resultado}\n`;
    });

    // salvar arquivo
    fs.writeFileSync("relatorio.txt", conteudo);

    console.log("📄 Relatório gerado com sucesso!");
  }
}