'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Furniture extends Model {
    static associate(models) {
      Furniture.belongsTo(models.Building, { foreignKey: 'buildingId' });
      Furniture.belongsTo(models.Area, { foreignKey: 'areaId' });
    }
  }
  Furniture.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        autoIncrement: false,
        unique: {
          args: true,
          msg: 'Exist ID!',
        },
      },
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Name is not allowed to be empty!',
          },
        },
      },
      path: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Path is not allowed to be empty!',
          },
        },
      },
      buildingId: {
        type: DataTypes.UUID,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Building ID is not allowed to be empty!',
          },
        },
      },
      areaId: {
        type: DataTypes.UUID,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Area ID is not allowed to be empty!',
          },
        },
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Active is not allowed to be empty!',
          },
        },
      },
      positionX: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Position X is not allowed to be empty!',
          },
        },
      },
      positionY: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Position Y is not allowed to be empty!',
          },
        },
      },
      className: {
        type: DataTypes.STRING,
      },
      createdBy: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: 'CreatedBy is not allowed to be empty!',
          },
        },
      },
      updatedBy: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: 'UpdatedBy is not allowed to be empty!',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'Furniture',
    }
  );
  return Furniture;
};
