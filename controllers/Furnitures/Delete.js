const { Furniture } = require('../../models');

const deleteFurniture = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Furniture.destroy({ where: { id } });
    if (!data) {
      return res.status(404).json({
        success: true,
        message: 'Delete furniture failed!',
        data: data || {},
      });
    }
    return res.status(200).json({
      success: true,
      message: 'Delete furniture successfully',
      data: data || {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error?.message || 'Delete furniture failed!',
    });
  }
};

module.exports = { deleteFurniture };
