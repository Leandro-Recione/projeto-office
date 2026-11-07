# 🏢 Projeto Office

**Projeto Office** é uma aplicação web de produtividade desenvolvida para centralizar ferramentas de organização pessoal em um único ambiente. O sistema permite gerenciar tarefas, criar anotações, acompanhar atividades e utilizar ferramentas de controle de tempo.

O projeto foi desenvolvido utilizando NestJS, TypeScript e TypeORM no backend, com uma interface construída em HTML, CSS e JavaScript.

---

## 🚀 Funcionalidades

- **Dashboard:** painel com indicadores e gráficos de produtividade.
- **Gerenciamento de tarefas:** criação, edição, consulta e exclusão de tarefas.
- **Controle de atividades:** acompanhamento do status de conclusão das tarefas.
- **Calendário:** visualização e organização de tarefas por data.
- **Anotações:** criação, edição e organização de notas.
- **Relógio:** visualização de horário em tempo real.
- **Cronômetro:** controle de tempo com registro de voltas.
- **Temporizador:** configuração de contagens regressivas com aviso sonoro.

## 🛠️ Tecnologias utilizadas

| Tecnologia | Utilização |
|---|---|
| Node.js | Ambiente de execução |
| NestJS | Framework backend |
| TypeScript | Linguagem de programação |
| TypeORM | Mapeamento objeto-relacional |
| MariaDB | Banco de dados |
| HTML5 | Estrutura da interface |
| CSS3 | Estilização |
| JavaScript | Interatividade |
| Chart.js | Construção de gráficos |

## 📂 Estrutura do projeto

```text
projeto-office/
│
├── frontend/
│   └── index.html
│
├── src/
│   ├── app/
│   │
│   ├── notes/
│   │   ├── dto/
│   │   ├── entity/
│   │   ├── notes.controller.ts
│   │   ├── notes.module.ts
│   │   └── notes.service.ts
│   │
│   ├── task/
│   │   ├── dto/
│   │   ├── entiy/
│   │   ├── task.controller.ts
│   │   ├── task.module.ts
│   │   └── task.service.ts
│   │
│   └── main.ts
│
├── .env
├── package.json
└── README.md
```

## ⚙️ Instalação e execução

### Pré-requisitos

- Node.js
- npm
- MariaDB ou MySQL

### 1. Clone o repositório

```bash
git clone URL_DO_REPOSITORIO
```

### 2. Entre na pasta do projeto

```bash
cd projeto-office
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DB_TYPE=mariadb
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha
DB_DATABASE=projeto_office
```

Configure as credenciais conforme seu ambiente e crie previamente o banco de dados.

### 5. Execute a aplicação

```bash
npm run start:dev
```

A aplicação estará disponível em:

```text
http://localhost:5050
```

## 🔌 Endpoints da API

### Tarefas

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/task` | Listar tarefas |
| GET | `/task/:id` | Buscar tarefa |
| POST | `/task` | Criar tarefa |
| PUT | `/task/:id` | Atualizar tarefa |
| DELETE | `/task/:id` | Excluir tarefa |

### Anotações

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/notes` | Listar anotações |
| GET | `/notes/:id` | Buscar anotação |
| POST | `/notes` | Criar anotação |
| PUT | `/notes/:id` | Atualizar anotação |
| DELETE | `/notes/:id` | Excluir anotação |

## 🏗️ Arquitetura

O backend utiliza a arquitetura modular do NestJS, organizando as responsabilidades da aplicação em componentes independentes.

- **Modules:** organização e integração dos módulos.
- **Controllers:** gerenciamento das requisições HTTP.
- **Services:** implementação das operações e regras de negócio.
- **Entities:** representação das entidades do banco de dados.
- **DTOs:** definição dos dados recebidos pela aplicação.

A persistência dos dados é realizada por meio do TypeORM, integrado ao banco de dados MariaDB.

## 📌 Melhorias futuras

- [ ] Implementar autenticação de usuários.
- [ ] Adicionar sistema de permissões.
- [ ] Implementar documentação com Swagger.
- [ ] Ampliar a cobertura de testes.
- [ ] Melhorar a organização e personalização das anotações.
- [ ] Implementar novas ferramentas de produtividade.

---

## 👨‍💻 Desenvolvedor

**Leandro Recione**

Desenvolvedor com foco em Back-End, interessado em arquitetura de software, desenvolvimento de APIs e construção de aplicações utilizando TypeScript, NestJS e Java.

---

*Projeto desenvolvido para estudo e aprimoramento de habilidades em desenvolvimento de software.*
