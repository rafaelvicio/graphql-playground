import { mergeSchemas } from "apollo-server-express";

import jobsSchema from "./jobs";
import companysSchema from "./companys"

const schemas = [jobsSchema, companysSchema];

export default mergeSchemas({
  schemas,
  resolvers: []
});
