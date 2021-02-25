module.exports = {
    Query: {
      launches: (_, __, { dataSources }) =>
        dataSources.pipeAPI.getAllLaunches()
    }
  };
  