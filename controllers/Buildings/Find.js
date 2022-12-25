const { Building } = require('../../models');

const findAll = async (_req, res) => {
  try {
    const data = await Building.findAll();
    return res.status(200).json({
      success: true,
      message: 'Get list building successfully',
      data: data || [],
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || 'Get list building failed!',
    });
  }
};

const findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Building.findOne({ where: { id } });
    if (!data) {
      return res.status(404).json({
        success: true,
        message: 'Get detail building failed!',
        data: data || {},
      });
    }
    return res.status(200).json({
      success: true,
      message: 'Get detail building successfully',
      data: data || {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error?.message || 'Get detail building failed!',
    });
  }
};

module.exports = { findAll, findOne };
