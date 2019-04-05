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
    allJobs: () => {
      return defaultData;
    },
    job: (root, { id }) => {
      return defaultData.filter(character => {
        return (character.id = id);
      })[0];
    }
  }
};
