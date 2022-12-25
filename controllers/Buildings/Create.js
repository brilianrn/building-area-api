const { Building } = require('../../models');

const create = async (req, res) => {
  try {
    const { name, createdBy, updatedBy } = req.body;
    if (!name) {
      return res.status(400).json({
        success: false,
        message: 'Name is required!',
      });
    }
    const addBuilding = await Building.create({
      name,
      active: true,
      createdBy: createdBy || 'admin',
      updatedBy: updatedBy || 'admin',
    });
    if (addBuilding) {
      return res.status(200).json({
        success: true,
        message: 'Create building successfully',
        data: addBuilding,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error?.message || 'Create building failed!',
    });
  }
};

module.exports = { create };
