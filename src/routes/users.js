const router = require("express").Router();
const {
  authenticateToken,
  authorizeAdmin,
} = require("../controller/authController");
const userController = require("../controller/userController");

router.get("/users", async (req, res) => {
  return userController.list(req, res);
});

router.post("/register", async (req, res) => {
  return userController.create(req, res);
});

router.put("/update/:id", authenticateToken, async (req, res) => {
  return userController.update(req, res);
});

router.post(
  "/admin/create",
  authenticateToken,
  authorizeAdmin,
  async (req, res) => {
    return userController.createAdmin(req, res);
  }
);

router.delete(
  "/admin/delete/:id",
  authenticateToken,
  authorizeAdmin,
  async (req, res) => {
    return userController.delete(req, res);
  }
);
module.exports = router;
