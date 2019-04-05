import { makeExecutableSchema } from "apollo-server";
import resolvers from "./jobs.resolvers";
import typeDefs from "./jobs.schema";

export default makeExecutableSchema({
  inheritResolversFromInterfaces: true,
  resolvers,
  typeDefs
});
