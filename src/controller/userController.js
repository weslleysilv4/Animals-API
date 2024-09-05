const userService = require("../services/UserService");

const userController = {
  async getAll(req, res) {
    try {
      const users = await userService.getAll();
      res.status(200).json({
        totalUsers: users.length,
        data: users,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req, res) {
    const { username, password } = req.body;
    try {
      const user = await userService.create(username, password);
      res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async createAdmin(req, res) {
    const { username, password } = req.body;
    try {
      const user = await userService.createAdmin(username, password);
      res.status(201).json({ message: "Admin created successfully", user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const { username, password, isAdmin } = req.body;
    try {
      const user = await userService.update(id, username, password, isAdmin);
      res.status(200).json({ message: "User updated successfully", user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async delete(req, res) {
    const { id } = req.params;
    try {
      await userService.delete(id);
      res.status(204).json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

module.exports = userController;
