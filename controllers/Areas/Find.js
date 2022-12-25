const { Area } = require('../../models');

const findAll = async (req, res) => {
  try {
    const { buildingId } = req.params;
    const data = await Area.findAll({ where: { buildingId } });
    return res.status(200).json({
      success: true,
      message: 'Get list area successfully',
      data: data || [],
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || 'Get list area failed!',
    });
  }
};

const findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Area.findOne({ where: { id } });
    if (!data) {
      return res.status(404).json({
        success: true,
        message: 'Get detail area failed!',
        data: data || {},
      });
    }
    return res.status(200).json({
      success: true,
      message: 'Get detail area successfully',
      data: data || {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error?.message || 'Get detail area failed!',
    });
  }
};

module.exports = { findAll, findOne };
