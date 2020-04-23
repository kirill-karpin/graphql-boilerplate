const { ApolloServer } = require('apollo-server');
const data = require('./src/data');
const typeDefs = require('./src/schema');

const resolvers = {
  Query: {
    books: () => data.getBooks(),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
