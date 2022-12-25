const router = require('express').Router();
const BuildingRoute = require('./building.route');
const AreaRoute = require('./area.route');
const FurnitureRoute = require('./furniture.route');

router.get('/', (_req, res) => {
  res.status(200).json({
    success: true,
    message: 'Hai, selamat datang di building-area-api',
  });
});
router.use('/buildings', BuildingRoute);
router.use('/areas', AreaRoute);
router.use('/furnitures', FurnitureRoute);

module.exports = router;
