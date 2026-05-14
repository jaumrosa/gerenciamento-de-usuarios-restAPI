# Sistema de Gerenciamento de Usuários

Projeto desenvolvido em JavaScript puro para cadastro, edição e remoção de usuários utilizando `localStorage` como persistência de dados.

## 🚀 Funcionalidades

* Cadastro de usuários
* Edição de usuários
* Exclusão de usuários
* Upload de foto de perfil
* Contagem de usuários e administradores
* Persistência de dados com `localStorage`
* Interface administrativa com AdminLTE

## 🛠️ Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript (ES6+)
* Bootstrap
* AdminLTE
* LocalStorage

## 📂 Estrutura do projeto

```bash
📁 project
 ├── 📁 controllers
 │    └── UserController.js
 │
 ├── 📁 models
 │    └── User.js
 │
 ├── 📁 classes
 │    └── Utils.js
 │
 ├── 📁 dist
 │    ├── 📁 css
 │    ├── 📁 img
 │
 ├── index.js
 └── index.html
```

## ▶️ Como executar

1. Clone o repositório:

```bash
git clone https://github.com/jaumrosa/gerenciamento-de-usuarios.git
```

2. Abra o projeto em um editor como VS Code.

3. Execute o `index.html` no navegador.

Recomendado utilizar a extensão:

* Live Server (VS Code)

## 💾 Persistência de dados

Os usuários são armazenados no `localStorage` do navegador.

Chaves utilizadas:

```js
users
usersID
```

## 📸 Observações

As imagens dos usuários são convertidas para Base64 antes de serem armazenadas no `localStorage`.

Dependendo do tamanho das imagens, o navegador pode lançar o erro:

```bash
QuotaExceededError
```

Para evitar isso:

* utilize imagens pequenas;
* comprima as fotos antes do upload;
* ou substitua o `localStorage` por uma API/backend futuramente.

## 📋 Funcionalidades da classe `User`

* Gerar ID automático
* Salvar usuário
* Remover usuário
* Carregar dados via JSON
* Getters e Setters

## 📋 Funcionalidades da classe `UserController`

* Controle dos formulários
* Manipulação da tabela
* Eventos de edição e exclusão
* Atualização dos contadores
* Preview e upload de foto

## 🧠 Aprendizados aplicados

* Programação Orientada a Objetos (POO)
* Manipulação do DOM
* Eventos em JavaScript
* Promises
* FileReader API
* Armazenamento local
* Template literals
* Spread Operator
* Desestruturação

## 👨‍💻 Autor

Desenvolvido por João Pedro Rosa.
