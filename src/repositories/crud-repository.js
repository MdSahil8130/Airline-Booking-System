const { Logger } = require("../config");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }
  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      Logger.error("Somthing went wrong in the crud Repo : create method");
      throw error;
    }
  }

  async destroy(data) {
    try {
      const response = await this.model.destroy({
        where:{
            id: data,
        }
      });
      return response;
    } catch (error) {
      Logger.error("Somthing went wrong in the crud Repo : destroy method");
      throw error;
    }
  }
  async getAll(){
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      Logger.error("Somthing went wrong in the crud Repo : getAll method");
      throw error;
    }
  }

  async update(data,id){
    try {
      const response = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return response;
    } catch (error) {
      Logger.error("Somthing went wrong in the crud Repo : update method");
      throw error;
    } 
  }
}


module.exports = CrudRepository;