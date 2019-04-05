import { gql } from "apollo-server-express";

export default gql`
  type Job {
    id: Int
    name: String
    gender: String
    homeworld: String
  }

  type Query {
    allJobs: [Job]
    job(id: Int!): Job
  }
`;
