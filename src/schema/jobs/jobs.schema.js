import { gql } from "apollo-server-express";

export default gql`
  type Job {
    _id: String
    title: String
    description: String
    salary: Number
    remote: Boolean
    company: Company
    active: Boolean
    createdAt: String
  }

  input createJobInput {
    title: String
    description: String
    salary: Number
    remote: Boolean
    company: String
    active: Boolean
  }

  input findJobInput {
    _id: String
  }

  type Mutation {
    create(input: createJobInput!): Job
  }

  type Query {
    allJobs: [Job]
    job(input: findJobInput!): Job
  }
`;
