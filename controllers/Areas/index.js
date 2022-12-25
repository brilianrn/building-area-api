const { create } = require('./Create');
const { update } = require('./Update');
const { deleteArea } = require('./Delete');
const { findAll, findOne } = require('./Find');

module.exports = {
  CreateArea: create,
  UpdateArea: update,
  FindAllArea: findAll,
  FindOneArea: findOne,
  DeleteArea: deleteArea,
};
