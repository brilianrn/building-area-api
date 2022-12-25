const { Furniture } = require('../../models');

const findAll = async (req, res) => {
  try {
    const { buildingId } = req.params;
    const data = await Furniture.findAll({ where: { buildingId } });
    return res.status(200).json({
      success: true,
      message: 'Get list furniture successfully',
      data: data || [],
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || 'Get list furniture failed!',
    });
  }
};

const findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Furniture.findOne({ where: { id } });
    if (!data) {
      return res.status(404).json({
        success: true,
        message: 'Get detail furniture failed!',
        data: data || {},
      });
    }
    return res.status(200).json({
      success: true,
      message: 'Get detail furniture successfully',
      data: data || {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error?.message || 'Get detail furniture failed!',
    });
  }
};

module.exports = { findAll, findOne };
