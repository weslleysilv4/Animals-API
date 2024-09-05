const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");

const AnimalModel = sequelize.define("animal", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  type: { type: DataTypes.STRING, allowNull: false },
  breed: { type: DataTypes.STRING, allowNull: false },
});

AnimalModel.belongsTo(User, {
  constraints: true,
  foreignKey: {
    name: "userId",
    allowNull: false,
  },
  onDelete: "CASCADE",
});

module.exports = AnimalModel;
