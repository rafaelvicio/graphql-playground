export default {
  Query: {
    allCompanys: (data, args, { loggedUser, controllers: { Companys } }) => {
      const companys = Companys.all();
      return companys;
    },
    company: (data, { input }, { loggedUser, controllers: { Companys } }) => {
      const companys = Companys.findById(input);
      return companys;
    }
  },
  Mutation: {
    create: (root, { input }, { loggedUser, controllers: { Companys } }) =>
      Companys.create(input)
  }
};
