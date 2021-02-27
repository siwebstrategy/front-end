const { RESTDataSource } = require('apollo-datasource-rest');

class PipeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:5000/';
  }

	// send get request to http://localhost:5000/pipes

	async getAllPipes() {
			// const response = await this.get('pipes');
			// return Array.isArray(response)
			// 		? response.map(pipe => this.pipeReducer(pipe))
			// 		: [];
			return await this.get('pipes');
	}
    
	async getPipeById({ pipeId }) {
		const response = await this.get('pipes', { id: pipeId });
		return this.pipeReducer(response[0]);
	}

	getPipesByIds({ pipeIds }) {
		return Promise.all(
			pipeIds.map(pipeId => this.getPipeById({ pipeId })),
		);
	}
	
	// reducer

  // pipeReducer(pipe) {
  //   return {
  //     id: "id",
  //     pipe_id: "pipe_id",
	// 		install_date: "install_date",
	// 		life_status: "life_status",
	// 		pipe_length: "pipe_length",
	// 		pipe_diameter: "pipe_diameter",
	// 		material: "material"
  //   };
  // }



}

module.exports = PipeAPI;
