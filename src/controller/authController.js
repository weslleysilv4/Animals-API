const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const authController = {
  async login(req, res) {
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign(
      { id: user.id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET
    );
    return res.json({ logged: true, token: token });
  },
  authenticateToken(req, res, next) {
    const token = req.header("Authorization")?.split(" ")[1];

    if (!token) return res.status(401).json({ message: "Token not provided" });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.status(403).json({ message: "Invalid Token" });
      req.user = user;
      next();
    });
  },
  authorizeAdmin(req, res, next) {
    if (!req.user.isAdmin) {
      return res.status(403).json({ message: "Access Denied!" });
    }
    next();
  },
};

module.exports = authController;
