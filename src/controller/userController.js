const UserModel = require("../models/User");
const bcrypt = require("bcrypt");

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
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    try {
      const user = await UserModel.create({
        username,
        password: hashedPassword,
      });
      res.status(201).json({ msg: "Usuário Criado com Sucesso!", user: user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  async update(req, res) {
    const { id } = req.params;
    const { username, password, role } = req.body;
    const user = await UserModel.findByPk(id);
    user.username = username;
    user.password = password;
    user.role = role;
    await user.save();
    res.json(user);
  },
  async delete(req, res) {
    const { id } = req.params;
    const user = await UserModel.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    await user.destroy();
    res.status(204).send({ msg: "User deleted" });
  },
};

module.exports = userController;
