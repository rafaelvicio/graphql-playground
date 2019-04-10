export default {
  Query: {
    allJobs: (data, args, { loggedUser, controllers: { Jobs } }) => {
      const jobs = Jobs.all();
      return jobs;
    },
    job: (data, { input }, { loggedUser, controllers: { Jobs } }) => {
      const job = Jobs.findById(input);
      return job;
    }
  },
  Mutation: {
    create: (root, { input }, { loggedUser, controllers: { Jobs } }) =>
      Jobs.create(input)
  }
};
