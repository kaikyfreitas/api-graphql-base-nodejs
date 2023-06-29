// O 'gql' é um template literal para escrever o schema GraphQL
const typeDefs = `#graphql
    # Este é o tipo 'Book', que define os campos consultáveis de um livro.
    type Book {
        title: String
        author: String
    }

    # O tipo 'Query' é especial: ele lista todas as consultas disponíveis
    # e qual tipo de dado elas retornam.
    type Query {
        # 'books' é uma consulta que retorna um array de zero ou mais 'Book's.
        books: [Book]
    }
`;

module.exports = typeDefs;