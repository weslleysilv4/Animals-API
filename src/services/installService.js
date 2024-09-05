const UserModel = require("../models/User");
const AnimalModel = require("../models/Animals");
const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const installService = {
  async installDatabase() {
    try {
      await UserModel.sync({ force: true });
      await AnimalModel.sync({ force: true });

      const users = [
        { username: "user1", password: "password1", isAdmin: false },
        { username: "user2", password: "password2", isAdmin: false },
        { username: "user3", password: "password3", isAdmin: false },
        { username: "user4", password: "password4", isAdmin: false },
        { username: "user5", password: "password5", isAdmin: false },
        { username: "admin1", password: "adminpassword", isAdmin: true },
        { username: "admin2", password: "adminpassword2", isAdmin: true },
      ];

      for (const user of users) {
        user.password = await hashPassword(user.password);
      }

      await UserModel.bulkCreate(users);

      const animals = await AnimalModel.bulkCreate([
        { name: "Lion", type: "Wild", breed: "African", userId: 1 },
        {
          name: "Dog",
          type: "Domestic",
          breed: "Labrador",
          userId: 1,
        },
        {
          name: "Cat",
          type: "Domestic",
          breed: "Persian",
          userId: 2,
        },
        {
          name: "Horse",
          type: "Domestic",
          breed: "Arabian",
          userId: 3,
        },
        { name: "Elephant", type: "Wild", breed: "Asian", userId: 4 },
      ]);

      return { users, animals };
    } catch (error) {
      throw new Error("Database installation failed: " + error.message);
    }
  },
};

module.exports = installService;
