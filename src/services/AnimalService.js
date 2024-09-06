const AnimalModel = require("../models/Animals");
const UserModel = require("../models/User");

const AnimalService = {
  async create(name, type, breed, userId) {
    return await AnimalModel.create({ name, type, breed, userId });
  },

  async getAll(skip, limit) {
    const limitAllowed = [5, 10, 30];
    if (!limitAllowed.includes(limit)) {
      limit = 5;
    }
    const offset = (skip - 1) * limit;

    return await AnimalModel.findAndCountAll({
      limit,
      offset,
      include: { model: UserModel, attributes: ["username"] },
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
    const animal = await AnimalModel.findAll({
      where: { userId: userId },
      include: { model: UserModel, attributes: ["username"] },
    });
    if (!animal) {
      throw new Error("Animal not found");
    }
    return { "My Animals": animal };
  },

  async update(id, name, type, breed, userId, isAdmin) {
    const animal = await AnimalModel.findByPk(id);
    if (!animal) {
      throw new Error("Animal not found");
    }
    if (isAdmin === true) {
      return await animal.update({ name, type, breed, userId });
    } else if (userId === animal.userId) {
      return await animal.update({ name, type, breed });
    } else if (userId !== animal.userId) {
      throw new Error("You do not have permission to update this animal");
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
