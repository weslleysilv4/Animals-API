const router = require("express").Router();
const authController = require("../controller/authController");
const userController = require("../controller/userController");

router.get("/users", async (req, res) => {
  return userController.list(req, res);
});

router.post("/register", async (req, res) => {
  return userController.create(req, res);
});

router.post(
  "/admin/create",
  authController.authenticateToken,
  authController.authorizeAdmin,
  async (req, res) => {
    return userController.createAdmin(req, res);
  }
);

router.delete(
  "/admin/delete/:id",
  authController.authenticateToken,
  authController.authorizeAdmin,
  async (req, res) => {
    return userController.delete(req, res);
  }
);
module.exports = router;
