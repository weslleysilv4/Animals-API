const express = require("express");
const authController = require("../controller/authController");
const router = express.Router();

router.post("/login", async (req, res) => {
  return authController.login(req, res);
});

module.exports = router;
