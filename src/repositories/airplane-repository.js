const CrudRepository = require("./crud-repository");
const {Airplane} = require('../models');
const AirplaneRepository = class extends CrudRepository{
    constructor(){
        super(Airplane);
    }
}

module.exports = AirplaneRepository;