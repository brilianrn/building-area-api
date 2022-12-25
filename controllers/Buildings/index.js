const { create } = require('./Create');
const { update } = require('./Update');
const { findAll, findOne } = require('./Find');

module.exports = {
  CreateBuilding: create,
  UpdateBuilding: update,
  FindAllBuilding: findAll,
  FindOneBuilding: findOne,
};
