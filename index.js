import express from "express";
import { ApolloServer, mergeSchemas } from "apollo-server-express";

// Schemas

import jobsSchema from "./api/schema/jobs";

// Resolvers

const app = express();

const PORT = 4000;

const schemas = [jobsSchema];

const mergedSchemas = mergeSchemas({
  schemas,
  resolvers: []
});

const SERVER = new ApolloServer({
  schema: mergedSchemas
});

SERVER.applyMiddleware({ app });

app.listen(PORT, () =>
  console.log(
    `🚀 GraphQL playground is running at http://localhost:4000/graphql`
  )
);
