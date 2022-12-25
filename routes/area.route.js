const {
  FindAllArea,
  CreateArea,
  FindOneArea,
  UpdateArea,
  DeleteArea,
} = require('../controllers/Areas');
const router = require('express').Router();

router.get('/:buildingId', FindAllArea);
router.get('/detail/:id', FindOneArea);
router.post('/', CreateArea);
router.put('/', UpdateArea);
router.delete('/:id', DeleteArea);

module.exports = router;
