const { Area } = require('../../models');

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
      const area = req.body[i];
      await Area.update(
        {
          ...area,
          updatedBy: area?.updatedBy || 'admin',
        },
        { where: { id: area?.id } }
      );
      if (i === req.body.length - 1) {
        return res.status(200).json({
          success: true,
          message: 'Update area successfully',
          data: true,
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error?.message || 'Update area failed!',
    });
  }
};

module.exports = { update };
