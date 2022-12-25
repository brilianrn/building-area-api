const { create } = require('./Create');
const { update } = require('./Update');
const { deleteFurniture } = require('./Delete');
const { findAll, findOne } = require('./Find');

module.exports = {
  CreateFurniture: create,
  UpdateFurniture: update,
  FindAllFurniture: findAll,
  FindOneFurniture: findOne,
  DeleteFurniture: deleteFurniture,
};
