# RESTful API com Node.js

API REST desenvolvida com **Node.js** utilizando **Express**, **NeDB** como banco de dados local e organização automática de rotas com **Consign**.

## Tecnologias utilizadas

* [Node.js](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [NeDB (@seald-io/nedb)](https://www.npmjs.com/package/@seald-io/nedb )
* [Body Parser](https://www.npmjs.com/package/body-parser)
* [Consign](https://www.npmjs.com/package/consign)
* [Express Validator](https://express-validator.github.io/docs/)
* [Postman](https://www.postman.com/)

---

# Estrutura do projeto

```bash
projeto-nodeJS/
├── node_modules/
├── routes/
│   ├── index.js
│   └── users.js
├── utils/
│   ├── error.js
│   └── validator.js
├── .gitignore
├── app.js
├── package-lock.json
├── package.json
├── README.md
└── users.db
```

---

# Instalação

Clone o repositório:

```bash
git clone https://github.com/jaumrosa/projeto-nodeJS.git
```

Entre na pasta do projeto:

```bash
cd projeto-nodeJS
```

Instale as dependências:

```bash
npm install
```

---

# Executando o projeto

Para iniciar o servidor:

```bash
node index.js
```

O servidor será iniciado em:

```bash
http://127.0.0.1:3000
```

---

# Configuração do servidor

Arquivo principal `index.js`:

```js
const express = require("express");
const expressValidator = require("express-validator");
const consign = require("consign");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());

consign()
    .include("routes")
    .include("utils")
    .into(app);

app.listen(3000, "127.0.0.1", () => {
    console.log("Servidor rodando!");
});
```

---

# Funcionalidades

* CRUD de usuários
* API REST
* Persistência de dados com NeDB
* Validação de dados
* Organização automática de rotas
* Estrutura modular

---

# Endpoints da API

| Método | Endpoint     | Descrição               |
| ------ | ------------ | ----------------------- |
| GET    | `/users`     | Lista todos os usuários |
| GET    | `/users/:id` | Busca usuário por ID    |
| POST   | `/users`     | Cria um novo usuário    |
| PUT    | `/users/:id` | Atualiza um usuário     |
| DELETE | `/users/:id` | Remove um usuário       |

---

# Testando a API com Postman

Os endpoints podem ser testados utilizando o [Postman](https://www.postman.com/).

Após iniciar o servidor:

```bash
node index.js
```

A API ficará disponível em:

```bash
http://127.0.0.1:3000
```

## Exemplo de requisição GET

```http
GET http://127.0.0.1:3000/users
```

## Exemplo de requisição POST

```http
POST http://127.0.0.1:3000/users
Content-Type: application/json
```

```json
{
    "name": "João Pedro Rosa",
    "email": "joao@email.com"
}
```

---

# Collection Postman

Você pode importar esta collection diretamente no Postman:

```json
{
    "info": {
        "name": "RESTful API NodeJS",
        "_postman_id": "9d4c8f60-5c74-4f96-a5a1-91f4f8f0c001",
        "description": "Collection para testes da API RESTful em Node.js",
        "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
    },
    "item": [
        {
            "name": "Listar usuários",
            "request": {
                "method": "GET",
                "url": {
                    "raw": "http://127.0.0.1:3000/users"
                }
            }
        },
        {
            "name": "Criar usuário",
            "request": {
                "method": "POST",
                "header": [
                    {
                        "key": "Content-Type",
                        "value": "application/json"
                    }
                ],
                "body": {
                    "mode": "raw",
                    "raw": "{\n    \"name\": \"João Pedro Rosa\",\n    \"email\": \"joao@email.com\"\n}"
                },
                "url": {
                    "raw": "http://127.0.0.1:3000/users"
                }
            }
        },
        {
            "name": "Buscar usuário por ID",
            "request": {
                "method": "GET",
                "url": {
                    "raw": "http://127.0.0.1:3000/users/1"
                }
            }
        },
        {
            "name": "Atualizar usuário",
            "request": {
                "method": "PUT",
                "header": [
                    {
                        "key": "Content-Type",
                        "value": "application/json"
                    }
                ],
                "body": {
                    "mode": "raw",
                    "raw": "{\n    \"name\": \"João Atualizado\",\n    \"email\": \"novo@email.com\"\n}"
                },
                "url": {
                    "raw": "http://127.0.0.1:3000/users/1"
                }
            }
        },
        {
            "name": "Deletar usuário",
            "request": {
                "method": "DELETE",
                "url": {
                    "raw": "http://127.0.0.1:3000/users/1"
                }
            }
        }
    ]
}
```

---

# Dependências

```json
"dependencies": {
    "@seald-io/nedb": "^4.1.2",
    "body-parser": "^2.2.2",
    "consign": "^0.1.6",
    "express": "^5.2.1",
    "express-validator": "^5.3.1"
}
```
---

# Autor

**João Pedro Rosa**

* GitHub: [@jaumrosa](https://github.com/jaumrosa)
