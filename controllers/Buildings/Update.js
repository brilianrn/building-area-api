const { Building } = require('../../models');

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, updatedBy } = req.body;
    if (!name) {
      return res.status(400).json({
        success: false,
        message: 'Name is required!',
      });
    }
    const updateBuilding = await Building.update(
      {
        name,
        active: true,
        updatedBy: updatedBy || 'admin',
      },
      { where: { id } }
    );
    if (updateBuilding) {
      return res.status(200).json({
        success: true,
        message: 'Update building successfully',
        data: updateBuilding,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error?.message || 'Update building failed!',
    });
  }
};

module.exports = { update };
