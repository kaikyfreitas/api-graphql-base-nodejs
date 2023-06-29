const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');

// Importa a definição de tipos (schema) e os resolvers
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

// Cria uma instância do ApolloServer
// O construtor requer os dois pilares de uma API GraphQL: o schema e os resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// Inicia o servidor de forma assíncrona
// Por padrão, ele roda na porta 4000
const startServer = async () => {
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4001 },
    });
    console.log(`🚀 Servidor GraphQL pronto em: ${url}`);
};

startServer();