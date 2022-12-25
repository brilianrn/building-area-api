'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Building extends Model {
    static associate(models) {
      Building.hasMany(models.Area, { foreignKey: 'buildingId' });
    }
  }
  Building.init(
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
      modelName: 'Building',
    }
  );
  return Building;
};
