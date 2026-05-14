# Sistema de Gerenciamento de Usuários

Projeto fullstack desenvolvido durante a trilha de desenvolvimento da Saipos, com frontend integrado a uma API REST utilizando Node.js, Express e Fetch API.

---

# Tecnologias utilizadas

## Frontend
- HTML5
- CSS3
- JavaScript
- Fetch API
- AdminLTE

## Backend
- Node.js
- Express
- REST API
- Restify Client

---

# Funcionalidades

- Cadastro de usuários
- Edição de usuários
- Exclusão de usuários
- Upload de imagens
- Integração frontend/backend
- Comunicação com API REST
- Migração de XMLHttpRequest para Fetch API

---

# Estrutura do projeto

```txt
├── api-server/          -> API REST
│   ├── routes/
│   ├── utils/
│   ├── app.js
│   └── users.db
│
├── public/              -> Frontend da aplicação
│   ├── classes/
│   ├── controllers/
│   ├── models/
│   └── dist/
│
├── routes/              -> Rotas do servidor Express
├── views/               -> Views do Express
├── app.js               -> Configuração principal do Express
└── package.json
```

---

# Como executar o projeto

## 1. Clonar o repositório

```bash
git clone https://github.com/jaumrosa/gerenciamento-de-usuarios-restAPI.git
```

---

# 2. Instalar dependências

## Servidor Express

```bash
npm install
```

## API REST

```bash
cd api-server
npm install
```

---

# 3. Executar a API REST

Dentro da pasta `api-server`:

```bash
npm start
```

A API será executada em:

```txt
http://localhost:4000
```

---

# 4. Executar aplicação Express

Na raiz do projeto:

```bash
npm start
```

A aplicação será executada em:

```txt
http://localhost:3000
```

---

# Fluxo da aplicação

```txt
Frontend -> Express -> API REST -> Banco JSON
```

---

# Conceitos aplicados

- CRUD completo
- Programação orientada a objetos
- Consumo de APIs REST
- Requisições assíncronas
- Arquitetura MVC
- Manipulação de JSON
- Upload de arquivos
- Integração frontend/backend
- Fetch API

---

# Autor

João Rosa

- GitHub: https://github.com/jaumrosa
- LinkedIn: https://www.linkedin.com/in/joaopedrorosa5/