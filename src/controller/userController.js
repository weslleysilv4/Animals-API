const UserModel = require("../models/User");

const userController = {
  async list(req, res) {
    const users = await UserModel.findAll();
    res.status(200).json(users);
  },
  async create(req, res) {
    const { username, password } = req.body;
    const userExists = await UserModel.findOne({ where: { username } });
    if (userExists) {
      return res.status(400).json({ error: "User already exists" });
    }
    try {
      const user = await UserModel.create({
        username,
        password,
      });
      res.status(201).json({ msg: "Usuário Criado com Sucesso!", user: user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  async createAdmin(req, res) {
    const { username, password } = req.body;
    const userExists = await UserModel.findOne({ where: { username } });
    if (userExists) {
      return res.status(400).json({ error: "User already exists" });
    }
    try {
      const user = await UserModel.create({
        username,
        password,
        isAdmin: true,
      });
      res.status(201).json({ msg: "Admin Criado com Sucesso!", user: user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const { username, password, isAdmin } = req.body;
    const user = await UserModel.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Campos obrigatórios não preenchidos" });
    }
    user.username = username;
    user.password = password;
    user.isAdmin = isAdmin;
    await user.save();
    res.json(user);
  },
  async delete(req, res) {
    const { id } = req.params;
    const user = await UserModel.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
    if (user.isAdmin) {
      return res
        .status(403)
        .json({ error: "Não é possível deletar um administrador'" });
    }
    await user.destroy();
    res.status(204).json({ msg: "Usuário Deletado com sucesso!" });
  },
};

module.exports = userController;
