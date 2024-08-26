# Frame Editor Web Application

## Visão Geral

O **Frame Editor Web Application** é um aplicativo web que permite visualizar e editar frames de demos armazenadas em um banco de dados. Desenvolvido com React para o frontend e Node.js para o backend, o projeto oferece uma interface intuitiva para selecionar e modificar frames, e salvar as alterações de volta ao banco de dados. 

## Funcionalidades

- **Listar Demos:** Visualize uma lista de demos disponíveis.
- **Selecionar e Visualizar Frames:** Selecione uma demo para ver seus frames e visualize o frame escolhido em um `<iframe>`.
- **Editar Conteúdo:** Edite o conteúdo HTML do frame diretamente através de um duplo clique.
- **Salvar Alterações:** Persistir as edições feitas nos frames de volta ao banco de dados.
- **Ordenação dos Frames:** Os frames são exibidos em ordem crescente de IDs.

## Tecnologias Utilizadas

- **Frontend:**
  - [React](https://reactjs.org/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [TailwindCSS](https://tailwindcss.com/)
  - [Redux Toolkit](https://redux-toolkit.js.org/)

- **Backend:**
  - [Node.js](https://nodejs.org/)
  - [Express](https://expressjs.com/)
  - [PostgreSQL](https://www.postgresql.org/)
  - [Docker]


## Instalação

### Banco de Dados

1. Navegue até o diretório docker:
    ```bash
    cd docker
    ```
2. Suba o container
     ```bash
    docker-compose up -d
    ```

### Backend

1. Navegue até o diretório do backend:

    ```bash
    cd backend
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Configure o banco de dados PostgreSQL e ajuste as variáveis de ambiente conforme necessário no arquivo `.env`.

4. Inicie o servidor backend:

    ```bash
    npm run build
    npm run start
    ```

### Frontend

1. Navegue até o diretório do frontend:

    ```bash
    cd frontend
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Configure as variáveis de ambiente, se necessário.

4. Inicie o servidor frontend:

    ```bash
    npm start
    ```

## Estrutura do Projeto

- **`/backend`:** Contém o código do servidor Node.js, incluindo configurações do Express e rotas API.
- **`/frontend`:** Contém o código do cliente React, incluindo componentes, hooks, e slices do Redux.
- **`/api/axiosInstance.ts`:** Configuração da instância do Axios para requisições HTTP.
- **`/features/demoSlice.ts`:** Slice do Redux para gerenciamento do estado dos demos.
- **`/features/frameSlice.ts`:** Slice do Redux para gerenciamento do estado dos frames.
- **`/components`:** Componentes React reutilizáveis.

## Endpoints da API

- **Listar Demos:** `GET /demos`
- **Buscar Frames por Demo:** `GET /demos/:id/frames`
- **Atualizar Frame:** `PUT /frames/:id`

## Uso

1. **Inicie o Backend** e o **Frontend** conforme as instruções de instalação.
2. **Acesse o Aplicativo** em `http://localhost:3000` (ou a porta configurada para o frontend).
3. **Navegue pela Lista de Demos,** selecione uma demo e visualize e edite os frames conforme necessário.

## Contribuição

Sinta-se à vontade para contribuir para este projeto! Você pode ajudar de várias maneiras:

- **Reportar Bugs:** Abra uma issue no repositório do GitHub.
- **Enviar Pull Requests:** Contribua com melhorias e correções.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

