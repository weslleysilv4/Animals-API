const AnimalModel = require("../models/Animals");
const UserModel = require("../models/User");

const AnimalService = {
  async create(name, type, breed, userId) {
    return await AnimalModel.create({ name, type, breed, userId });
  },

  async getAll(skip, limit) {
    const limitesPermitidos = [5, 10, 30];
    if (!limitesPermitidos.includes(limit)) {
      limit = 5;
    }
    const offset = (skip - 1) * limit;

    return await AnimalModel.findAndCountAll({
      limit,
      offset,
    });
  },

  async getById(id) {
    return await AnimalModel.findByPk(id);
  },

  async getAnimalByUserId(userId) {
    const user = await UserModel.findByPk(userId);
    if (!user) {
      throw new Error("User not found");
    }
    return await AnimalModel.findAll({
      where: { userId: userId },
      association: "user",
    });
  },

  async update(id, name, type, breed) {
    const animal = await AnimalModel.findByPk(id);
    if (!animal) {
      throw new Error("Animal not found");
    }
    return await animal.update({ name, type, breed });
  },

  async delete(id) {
    const animal = await AnimalModel.findByPk(id);
    if (!animal) {
      throw new Error("Animal not found");
    }
    await animal.destroy();
  },
};

module.exports = AnimalService;
