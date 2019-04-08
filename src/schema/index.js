import { mergeSchemas } from "apollo-server-express";

import jobsSchema from "./jobs";

const schemas = [jobsSchema];

export default mergeSchemas({
  schemas,
  resolvers: []
});
