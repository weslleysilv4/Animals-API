const AnimalService = require("../services/AnimalService");
const UserService = require("../services/UserService");

const AnimalController = {
  async create(req, res) {
    try {
      const { name, type, breed, userId } = req.body;
      const user = await UserService.getById(userId);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      const animal = await AnimalService.create(name, type, breed, userId);
      return res.status(201).json(animal);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const { page = 1, limit = 5 } = req.query;
      const animals = await AnimalService.getAll(Number(page), Number(limit));
      return res.status(200).json({
        totalAnimals: animals.count,
        totalPages: Math.ceil(animals.count / limit),
        page: Number(page),
        limit: Number(limit),
        data: animals.rows,
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      const animal = await AnimalService.getById(id);
      if (!animal) {
        return res.status(404).json({ error: "Animal not found" });
      }
      return res.status(200).json(animal);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
  async getAnimalByUserId(req, res) {
    const { id } = req.params;
    const userId = Number(id);
    try {
      const report = await AnimalService.getAnimalByUserId(userId);
      return res.status(200).json(report);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const isAdmin = req.user.isAdmin;
      const userId = req.user.id;

      const { name, type, breed } = req.body;
      const updatedAnimal = await AnimalService.update(
        id,
        name,
        type,
        breed,
        userId,
        isAdmin
      );
      return res.status(200).json(updatedAnimal);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      await AnimalService.delete(id);
      return res.status(200).json({
        message: "Animal deleted successfully",
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
};

module.exports = AnimalController;
