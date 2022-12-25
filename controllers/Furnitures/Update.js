const { Furniture } = require('../../models');

const update = async (req, res) => {
  try {
    if (!req.body.length) {
      return res.status(400).json({
        success: true,
        message: 'Data is not found!',
        data: null,
      });
    }
    for (let i = 0; i < req.body.length; i++) {
      const furniture = req.body[i];
      await Furniture.update(
        {
          ...furniture,
          updatedBy: furniture?.updatedBy || 'admin',
        },
        { where: { id: furniture?.id } }
      );
      if (i === req.body.length - 1) {
        return res.status(200).json({
          success: true,
          message: 'Update furniture successfully',
          data: true,
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error?.message || 'Update furniture failed!',
    });
  }
};

module.exports = { update };
