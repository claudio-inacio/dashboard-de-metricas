📊 Plataforma de Gestão de Campanhas de Marketing

Aplicação web desenvolvida em Next.js + React + TypeScript + TailwindCSS para visualização e gerenciamento de campanhas de marketing digital.

O sistema permite:

Visualizar métricas em um dashboard analítico

Listar campanhas de marketing

Filtrar campanhas por status

Visualizar investimentos por canal

Navegar entre diferentes visões analíticas da aplicação

O objetivo do projeto é demonstrar boas práticas de desenvolvimento front-end, incluindo:

Componentização

Tipagem forte com TypeScript

Arquitetura modular

Tratamento de erros

Filtros via URL

Componentes genéricos reutilizáveis

🚀 Tecnologias Utilizadas

Next.js (App Router)

React

TypeScript

TailwindCSS

Recharts (gráficos)

React Toastify (notificações)


🌐 Ambiente de Produção

A aplicação está disponível em:

👉 https://dashboard-de-metricas-w4cy.vercel.app/

Exemplo:

https://marketing-dashboard.vercel.app
💻 Como Rodar o Projeto Localmente
1️⃣ Clone o repositório
git clone https://github.com/claudio-inacio/dashboard-de-metricas.git
2️⃣ Acesse a pasta do projeto
cd dashboard-de-metricas
3️⃣ Instale as dependências
npm install
4️⃣ Execute o projeto
npm run dev
5️⃣ Acesse no navegador
http://localhost:3000


📊 Funcionalidades Implementadas
Dashboard

Visualização de métricas de campanhas

Gráfico de investimento por canal

Layout responsivo

Listagem de Campanhas

Tabela genérica e reutilizável

Filtro por status:

Ativa

Pausada

Finalizada

Todas

Filtros sincronizados com URL

Componente de loading

Tratamento de estados vazios

Arquitetura

O projeto foi estruturado com separação clara de responsabilidades:

components
hooks
types
enum
containers
pages

Principais conceitos utilizados:

Componentização

Container Pattern

Hooks customizados

Tipagem genérica

Componentes reutilizáveis

🔎 Filtro via URL

A listagem de campanhas permite aplicar filtros diretamente pela URL.

Exemplo
/campaigns?filter=ativa
Opções disponíveis
ativa
pausada
finalizada
todos
Caso o filtro não exista

Se um filtro inválido for informado:

/campaigns?filter=ativa-error

Um modal de erro explicativo será exibido.

⚠️ Tratativa de Erros
Simular erro de requisição

Basta alterar a rota da API no hook:

handleGetDashboardData
Testar estado vazio

Passe um array vazio para campanhas:

[]
Testar página não encontrada

Digite uma rota inexistente:

/rota-error

A aplicação exibirá a página 404 personalizada.

⏳ Loading

Para visualizar melhor o loading da aplicação:

1️⃣ Abra o DevTools → Network
2️⃣ Configure a velocidade para:

Fast 4G

3️⃣ Clique em Atualizar

ou

4️⃣recarregue a página.

💾 Cache de Dados

Melhoria futura:

Utilizar React Query para cache de requisições.
Desabilitar o armazenamento

Atualizar dados manualmente

Caso o cache esteja ativo, o botão Atualizar executa uma nova requisição.

🔮 Melhorias Futuras

1️⃣ Permitir clicar no gráfico de investimento e redirecionar para a lista de campanhas filtrada pelo canal selecionado.

2️⃣ Ordenação da lista de campanhas por:

Valor de investimento (crescente / decrescente)

Data de criação (crescente / decrescente)

3️⃣ Filtros avançados:

Nome da campanha

Canal

Data de início

Intervalo de investimento (mínimo / máximo)

4️⃣ Controle direto das campanhas na listagem:

Pausar campanha

Reativar campanha

Finalizar campanha

5️⃣ Paginação da listagem de campanhas.

Exemplo:

API retornando 10 itens por requisição

6️⃣ Separação do hook:

useDashboardData

em dois hooks:

useDashboardData
useCampaignListData

7️⃣ Permitir salvar filtros preferenciais do usuário, exibindo automaticamente ao acessar a página de campanhas.

📁 Estrutura Simplificada
app
 ├ components
 ├ hooks
 ├ enum
 ├ types
 ├ campaigns
 ├ dashboard
 └ utils
👨‍💻 Autor

Desenvolvido por Claudio Inácio

Frontend Developer focado em React, Next.js e arquitetura de aplicações web escaláveis.
