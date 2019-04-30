const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const config = require("./schema");
const server = new ApolloServer(config);

const app = express();
app.use(express.static("public"));
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
