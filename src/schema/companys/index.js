import { makeExecutableSchema } from "apollo-server";
import resolvers from "./companys.resolvers";
import typeDefs from "./companys.schema";

export default makeExecutableSchema({
  inheritResolversFromInterfaces: true,
  resolvers,
  typeDefs
});
