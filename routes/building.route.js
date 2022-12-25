const router = require('express').Router();
const {
  CreateBuilding,
  FindAllBuilding,
  FindOneBuilding,
  UpdateBuilding,
} = require('../controllers/Buildings');

router.get('/', FindAllBuilding);
router.post('/', CreateBuilding);
router.get('/:id', FindOneBuilding);
router.put('/:id', UpdateBuilding);

module.exports = router;
