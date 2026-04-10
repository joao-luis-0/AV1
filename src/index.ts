import * as readline from "readline";

import { Aeronave } from "./models/Aeronave";
import { TipoAeronave } from "./enums/TipoAeronave";

import { Peca } from "./models/Peca";
import { TipoPeca } from "./enums/TipoPeca";
import { StatusPeca } from "./enums/StatusPeca";

import { Etapa } from "./models/Etapa";

import { Funcionario } from "./models/Funcionario";
import { NivelPermissao } from "./enums/NivelPermissao";

import { Teste } from "./models/Teste";
import { TipoTeste } from "./enums/TipoTeste";
import { ResultadoTeste } from "./enums/ResultadoTeste";

import { Relatorio } from "./models/Relatorio";

// =======================
// DADOS INICIAIS
// =======================
const aeronaves: Aeronave[] = [];

const aviao = new Aeronave(
  "A001",
  "Embraer 195",
  TipoAeronave.COMERCIAL,
  120,
  4500
);

cadastrarAeronave(aviao);

const usuarios: Funcionario[] = [
  new Funcionario(1, "Admin", "1111", "Rua A", "admin", "123", NivelPermissao.ADMINISTRADOR),
  new Funcionario(2, "Eng", "2222", "Rua B", "eng", "123", NivelPermissao.ENGENHEIRO),
  new Funcionario(3, "Op", "3333", "Rua C", "op", "123", NivelPermissao.OPERADOR)
];

//(usuário logado)
let usuarioLogado: Funcionario;


// CLI

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// LOGIN

function login(): void {
  rl.question("Usuário: ", (user) => {
    rl.question("Senha: ", (senha) => {

      const usuario = usuarios.find(u => u.autenticar(user, senha));

      if (!usuario) {
        console.log("❌ Login inválido\n");
        return login();
      }

      console.log(`\n✅ Bem-vindo, ${usuario.nome}`);

      usuarioLogado = usuario; // salva usuário logado

      menu(usuario);
    });
  });
}


// MENU

function menu(usuario: Funcionario): void {
  console.log("\n===== MENU =====");
  console.log("1 - Exibir Aeronave");
  console.log("2 - Adicionar Peça");
  console.log("3 - Adicionar Etapa");
  console.log("4 - Adicionar Teste");
  console.log("5 - Gerar Relatório");
  console.log("0 - Sair");

  rl.question("Escolha: ", (opcao) => {

    switch (opcao) {
      case "1":
        aviao.exibirDetalhes();
        break;

      case "2":
        adicionarPeca();
        return;

      case "3":
        adicionarEtapa();
        return;

      case "4":
        adicionarTeste();
        return;

      case "5":
        if (usuario.nivelPermissao === NivelPermissao.OPERADOR) {
          console.log("❌ Sem permissão!");
        } else {
          const relatorio = new Relatorio();
          relatorio.gerar(aviao);
        }
        break;

      case "0":
        console.log("Saindo...");
        rl.close();
        return;

      default:
        console.log("❌ Opção inválida");
    }

    menu(usuario);
  });
}


// CADASTROS

function adicionarPeca() {
  rl.question("Nome da peça: ", (nome) => {

    const peca = new Peca(
      nome,
      TipoPeca.NACIONAL,
      "Fornecedor CLI",
      StatusPeca.EM_PRODUCAO
    );

    aviao.adicionarPeca(peca);

    console.log("✅ Peça adicionada!");
    menuAtual();
  });
}

function adicionarEtapa() {
  rl.question("Nome da etapa: ", (nome) => {

    const etapa = new Etapa(nome, 5);
    etapa.iniciar();

    aviao.adicionarEtapa(etapa);

    console.log("✅ Etapa adicionada!");
    menuAtual();
  });
}

function adicionarTeste() {
  const teste = new Teste(
    TipoTeste.ELETRICO,
    ResultadoTeste.APROVADO
  );

  aviao.adicionarTeste(teste);

  console.log("✅ Teste adicionado!");
  menuAtual();
}


// VOLTAR MENU

function menuAtual() {
  menu(usuarioLogado);
}

function cadastrarAeronave(nova: Aeronave): void {
  const existe = aeronaves.find(a => a.codigo === nova.codigo);

  if (existe) {
    console.log("❌ Já existe uma aeronave com esse código!");
    return;
  }

  aeronaves.push(nova);
}

// INÍCIO

login();