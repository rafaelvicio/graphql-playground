import { ApolloServer } from "apollo-server-express";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import schema from "./schema";

class Server {
  constructor() {
    this.express = express();
    this.express.use(helmet());
    this.express.use(cors());
    this.createServerApollo();
  }

  async createServerApollo() {
    const apolloServer = new ApolloServer({
      schema
    });

    apolloServer.applyMiddleware({ app: this.express, path: "/" });
  }
}

export default new Server();
