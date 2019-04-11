import { gql } from "apollo-server-express";

export default gql`
  type Company {
    _id: ID!
    name: String
    description: String
    city: String
    site: String
    active: Boolean
  }

  input createCompanyInput {
    name: String
    description: String
    city: String
    site: String
    active: Boolean
  }

  input findCompanyInput {
    _id: ID!
  }

  type Mutation {
    create(input: createCompanyInput!): Company
  }

  type Query {
    allCompanys: [Company]
    company(input: createCompanyInput!): Company
  }
`;
