import { gql } from "apollo-server-express";

export default gql`
  type Job {
    _id: String
    title: String
    description: String
  }

  input createJobInput {
    title: String
    description: String
  }

  input findJobInput {
    id: String
  }

  type Mutation {
    create(input: createJobInput!): Job
  }

  type Query {
    allJobs: [Job]
    job(input: findJobInput!): Job
  }
`;
