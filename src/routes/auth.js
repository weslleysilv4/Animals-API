const router = require("express").Router();
const authController = require("../controller/authController");
const {
  authenticateToken,
  authorizeAdmin,
} = require("../controller/authController");
const userController = require("../controller/userController");

router.post("/login", async (req, res) => {
  return authController.login(req, res);
  // #swagger.tags = ['Auth']
  // #swagger.description = 'Endpoint to login'
  // #swagger.parameters['newUser'] = {
  //   in: 'body',
  //   description: 'User data',
  //   required: true,
  //   type: 'object',
  //   schema: { $ref: '#/definitions/NewUser' }
  // }
  // #swagger.responses[200] = {
  //   description: 'User logged in'
  // }
  // #swagger.responses[400] = {
  //   description: 'Error logging in'
  // }
});
router.post(
  "/admin/create",
  authenticateToken,
  authorizeAdmin,
  async (req, res) => {
    return userController.createAdmin(req, res);
  }
  // #swagger.tags = ['Admin']
  // #swagger.description = 'Endpoint to create an admin'
  // #swagger.parameters['User'] = {
  //   in: 'body',
  //   description: 'User data',
  //   required: true,
  //   type: 'object',
  //   schema: { $ref: '#/definitions/User' }
  // }
  // #swagger.responses[201] = {
  //   description: 'Admin created'
  // }
  // #swagger.responses[400] = {
  //   description: 'Error creating admin'
  // }
);

module.exports = router;
