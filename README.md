✈️ Sistema de Produção de Aeronaves

📌 Descrição

Sistema desenvolvido em TypeScript que simula o processo de produção de aeronaves, com controle de peças, etapas, testes e usuários.

🚀 Instalação e execução

🔧 Pré-requisitos
Node.js (recomendado versão 16 ou superior)
npm (já vem com o Node)

📥 1. Clonar o repositório
git clone <https://github.com/joao-luis-0/AV1>
cd <AV1>

📦 2. Instalar dependências
npm install

Se necessário, instale também os tipos do Node:

npm install -D @types/node
⚙️ 3. Configurar TypeScript (caso necessário)

No arquivo tsconfig.json, verifique se existe:
"types": ["node"]

▶️ 4. Executar o projeto
npm start
Ou:
npx ts-node src/index.ts
🔐 Login para teste

Usuário e Senha
admin|123 -- eng|123 -- op|123

🖥️ Menu
1 - Exibir Aeronave
2 - Adicionar Peça
3 - Adicionar Etapa
4 - Adicionar Teste
5 - Gerar Relatório
0 - Sair
📄 Relatório

Ao gerar, será criado um arquivo relatorio.txt com os dados da aeronave.

🛠️ Tecnologias Usadas
TypeScript
Node.js
