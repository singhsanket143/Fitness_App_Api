'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HealthRecord extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Symptoms, {
        through: 'Health_Symptopms',
        foreignKey: 'recordId',
        otherKey: 'symptomId'
      });
      this.belongsTo(models.User, {
        foreignKey: 'userId'
      })
    }
  }
  HealthRecord.init({
    height: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    bloodPressure: DataTypes.INTEGER,
    sugarLevel: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'HealthRecord',
  });
  return HealthRecord;
};