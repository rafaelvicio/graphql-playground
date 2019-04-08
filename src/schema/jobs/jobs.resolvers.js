const defaultData = [
  {
    id: 1,
    name: "Luke SkyWaler",
    gender: "male",
    homeworld: "Tattoine"
  },
  {
    id: 2,
    name: "C-3PO",
    gender: "bot",
    homeworld: "Tattoine"
  }
];

export default {
  Query: {
    allJobs: (data, args, { loggedUser, controllers: { Jobs } }) => {
      Jobs.create();
      return defaultData;
    },
    job: (data, { id }, { loggedUser, controllers: { Jobs } }) => {
      Jobs.create();
      return defaultData.filter(character => {
        return (character.id = id);
      })[0];
    }
  }
};
