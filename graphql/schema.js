const { gql } = require('apollo-server');

const typeDefs = gql`
  type Pipe {
      id: ID!
      pipe_id: ID
      install_date: String
      life_status: String
      pipe_length: Float
      pipe_diameter: Int
      material: String
  }

  type Query {
      pipes: [Pipe]
  }
`;

module.exports = typeDefs;
