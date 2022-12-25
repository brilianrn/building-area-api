const { Area } = require('../../models');

const create = async (req, res) => {
  try {
    const {
      name,
      buildingId,
      positionX,
      positionY,
      className,
      createdBy,
      updatedBy,
    } = req.body;
    if (!name) {
      return res.status(400).json({
        success: false,
        message: 'Name is required!',
      });
    }
    if (!buildingId) {
      return res.status(400).json({
        success: false,
        message: 'Building ID is required!',
      });
    }
    if (!positionX) {
      return res.status(400).json({
        success: false,
        message: 'Position X is required!',
      });
    }
    if (!positionY) {
      return res.status(400).json({
        success: false,
        message: 'Position Y is required!',
      });
    }
    const add = await Area.create({
      name,
      buildingId,
      positionX,
      positionY,
      className,
      active: true,
      createdBy: createdBy || 'admin',
      updatedBy: updatedBy || 'admin',
    });
    if (add) {
      return res.status(200).json({
        success: true,
        message: 'Create area successfully',
        data: add,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error?.message || 'Create area failed!',
    });
  }
};

module.exports = { create };
