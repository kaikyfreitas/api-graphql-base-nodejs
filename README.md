# API Base com GraphQL e Apollo Server

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=nodedotjs)
![GraphQL](https://img.shields.io/badge/GraphQL-E10098?logo=graphql)
![Apollo](https://img.shields.io/badge/Apollo%20Server-4-311C87?logo=apollographql)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

Uma API base que utiliza **GraphQL** em vez do padrão REST, construída com Node.js e **Apollo Server**. GraphQL permite que os clientes peçam exatamente os dados que precisam, evitando o excesso (`over-fetching`) ou a falta (`under-fetching`) de informações.

## ✨ Conceitos Principais

-   **Schema (`schema.js`):** O contrato da API. Define os tipos de dados (`Book`) e as operações de consulta (`Query`) disponíveis.
-   **Resolvers (`resolvers.js`):** As funções que implementam o schema. São responsáveis por buscar os dados e "resolver" as consultas.
-   **Apollo Server:** A biblioteca que une o schema e os resolvers para criar um servidor GraphQL funcional.
-   **Apollo Sandbox:** Uma poderosa interface gráfica, inclusa por padrão, para testar as queries da sua API de forma interativa.

## 📦 Instalação e Configuração

1.  **Clone o repositório e instale as dependências:**
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    cd api-graphql-base-nodejs
    npm install
    ```

2.  Nenhuma configuração de variáveis de ambiente é necessária para este projeto base.

## ▶️ Como Executar

```bash
npm run dev