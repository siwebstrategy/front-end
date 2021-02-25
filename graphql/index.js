const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const PipeAPI = require('./pipes');

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    dataSources: () => ({
        pipeAPI: new PipeAPI()
    })
});

server.listen().then(() => {
    console.log(`
      Server is running!
      Listening on port 4000
      Explore at https://studio.apollographql.com/dev
    `);
  });
  