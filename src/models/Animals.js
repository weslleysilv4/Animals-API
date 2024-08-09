const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");

class Animals extends Model {}

Animals.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    breed: DataTypes.STRING,
    location: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
  },
  Animals.belongsTo(User, { foreignKey: "id" }),
  { sequelize, modelName: "animals" }
);

module.exports = Animals;
