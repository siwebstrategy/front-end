module.exports = {
    Query: {
      pipes: (_, __, { dataSources }) =>
        dataSources.pipeAPI.getAllPipes()
    }
  };
  