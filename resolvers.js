const books = require('./data');

// Os resolvers são a implementação do nosso schema.
// A estrutura do objeto (Query.books) deve corresponder à do schema.
const resolvers = {
    Query: {
        // A função para o resolver 'books' simplesmente retorna nosso array de dados.
        books: () => books,
    },
};

module.exports = resolvers;