const router = require("express").Router();
const {
  authenticateToken,
  authorizeAdmin,
} = require("../middleware/authMiddleware");
const userController = require("../controller/userController");

router.get("/users", async (req, res) => {
  return userController.list(req, res);
});

router.post(
  "/admin/register",
  authenticateToken,
  authorizeAdmin,
  async (req, res) => {
    return userController.create(req, res);
  }
);

router.delete("/users/:id", async (req, res) => {
  return userController.delete(req, res);
});
module.exports = router;
