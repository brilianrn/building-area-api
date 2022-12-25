const { Area } = require('../../models');

const deleteArea = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Area.destroy({ where: { id } });
    if (!data) {
      return res.status(404).json({
        success: true,
        message: 'Delete area failed!',
        data: data || {},
      });
    }
    return res.status(200).json({
      success: true,
      message: 'Delete area successfully',
      data: data || {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error?.message || 'Delete area failed!',
    });
  }
};

module.exports = { deleteArea };
