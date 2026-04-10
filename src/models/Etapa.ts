import { StatusEtapa } from "../enums/StatusEtapa";
import { Funcionario } from "./Funcionario";

export class Etapa {
  public funcionarios: Funcionario[] = [];

  constructor(
    public nome: string,
    public prazo: number,
    public status: StatusEtapa = StatusEtapa.PENDENTE
  ) {}

  iniciar(): void {
    if (this.status !== StatusEtapa.PENDENTE) {
      console.log("❌ Etapa já iniciada ou finalizada.");
      return;
    }

    this.status = StatusEtapa.ANDAMENTO;
    console.log(`✅ Etapa "${this.nome}" iniciada.`);
  }

  finalizar(): void {
    if (this.status !== StatusEtapa.ANDAMENTO) {
      console.log("❌ Etapa não pode ser finalizada.");
      return;
    }

    this.status = StatusEtapa.CONCLUIDA;
    console.log(`✅ Etapa "${this.nome}" concluída.`);
  }

  adicionarFuncionario(func: Funcionario): void {
    const existe = this.funcionarios.find(f => f.id === func.id);

    if (existe) {
      console.log("⚠️ Funcionário já está na etapa.");
      return;
    }

    this.funcionarios.push(func);
    console.log(`✅ Funcionário "${func.nome}" adicionado.`);
  }

  listarFuncionarios(): void {
    console.log(`Funcionários da etapa "${this.nome}":`);

    if (this.funcionarios.length === 0) {
      console.log("Nenhum funcionário cadastrado.");
      return;
    }

    this.funcionarios.forEach((f, i) => {
      console.log(`${i + 1}. ${f.nome}`);
    });
  }
}