const rp = require("request-promise");
const { gql } = require("apollo-server");

const typeDefs = gql`
  type Ingredient {
    name: String
    price: String
  }

  type Query {
    items: [Ingredient]
  }
`;

const resolvers = {
  Query: {
    items() {
      return rp({ uri: "http://localhost:4000/salad.json" }).then(res => {
        return JSON.parse(res).items;
      });
    }
  }
};

module.exports = { typeDefs, resolvers };
