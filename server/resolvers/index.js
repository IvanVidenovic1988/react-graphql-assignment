const { takeANap } = require('../utils');
const resolvers = {
  Query: {
    getEntities: async (_, { sortBy, limit, page, filter }, context) => {
      await takeANap();
      return context.database.find(sortBy, limit, page, filter);
    },
  },
  Status: {
    OPEN: 1,
    CLOSED: 0,
  },
};

module.exports = {
  resolvers,
};
