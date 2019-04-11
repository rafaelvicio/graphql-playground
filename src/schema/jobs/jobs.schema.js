import { gql } from "apollo-server-express";

export default gql`
  type Job {
    _id: ID!
    title: String
    description: String
    salary: Float
    remote: Boolean
    company: Company!
    active: Boolean
    createdAt: String
  }

  input createJobInput {
    title: String
    description: String
    salary: Float
    remote: Boolean
    company: String
    active: Boolean
  }

  input findJobInput {
    _id: ID!
  }

  type Mutation {
    create(input: createJobInput!): Job
  }

  type Query {
    allJobs: [Job]
    job(input: findJobInput!): Job
  }
`;
