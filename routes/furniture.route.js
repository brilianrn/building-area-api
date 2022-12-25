const {
  FindAllFurniture,
  CreateFurniture,
  DeleteFurniture,
  FindOneFurniture,
  UpdateFurniture,
} = require('../controllers/Furnitures');
const router = require('express').Router();

router.get('/:buildingId', FindAllFurniture);
router.get('/detail/:id', FindOneFurniture);
router.post('/', CreateFurniture);
router.put('/', UpdateFurniture);
router.delete('/:id', DeleteFurniture);

module.exports = router;
