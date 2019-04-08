import { ApolloServer } from "apollo-server-express";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import schema from "./schema";

import JobsController from "./controllers/JobsControllers";

class Server {
  constructor() {
    this.express = express();
    this.express.use(helmet());
    this.express.use(cors());
    this.createServerApollo();
  }

  async createServerApollo() {
    const apolloServer = new ApolloServer({
      context: async ({ req }) => this.createContext(req),
      schema
    });

    apolloServer.applyMiddleware({ app: this.express, path: "/" });
  }

  async createContext(req) {
    return {
      loggedUser: true,
      controllers: {
        Jobs: new JobsController()
      }
    };
  }
}

export default new Server();
