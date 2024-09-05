const UserModel = require("../models/User");
const bcrypt = require("bcrypt");

const UserService = {
  async getAll() {
    return await UserModel.findAll({
      attributes: { exclude: ["password"] },
    });
  },

  async getById(id) {
    return await UserModel.findByPk(id, {
      attributes: { exclude: ["password"] },
    });
  },

  async create(username, password) {
    const userExists = await UserModel.findOne({ where: { username } });
    if (userExists) {
      throw new Error("User already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    return await UserModel.create({
      username,
      password: hashedPassword,
    });
  },

  async createAdmin(username, password) {
    const userExists = await UserModel.findOne({ where: { username } });
    if (userExists) {
      throw new Error("User already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    return await UserModel.create({
      username,
      password: hashedPassword,
      isAdmin: true,
    });
  },

  async update(id, username, password) {
    const user = await UserModel.findByPk(id);
    if (!user) {
      throw new Error("User not found");
    }

    if (username) {
      user.username = username;
    }

    if (password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }

    await user.save();
    return user;
  },

  async delete(id) {
    const user = await UserModel.findByPk(id);
    if (!user) {
      throw new Error("User not found");
    }

    if (user.isAdmin) {
      throw new Error("Cannot delete an admin user");
    }

    await user.destroy();
    return { message: "User successfully deleted" };
  },
};

module.exports = UserService;
