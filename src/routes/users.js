const express = require("express");
const router = express.Router();
const {
  authenticateToken,
  authorizeAdmin,
} = require("../controller/authController");

const userController = require("../controller/userController");

router.get("/users", async (req, res) => {
  return userController.getAll(req, res);
  // #swagger.tags = ['Users']
  // #swagger.description = 'Endpoint to get all users'
  // #swagger.responses[200] = {
  //   description: 'Users found'
  // }
  // #swagger.responses[400] = {
  //   description: 'Error searching for users'
  // }
});

router.post("/register", async (req, res) => {
  return userController.create(req, res);
  // #swagger.tags = ['Users']
  // #swagger.description = 'Endpoint to create a new user'
  // #swagger.parameters['newUser'] = {
  //   in: 'body',
  //   description: 'User data',
  //   required: true,
  //   type: 'object',
  //   schema: { $ref: '#/definitions/NewUser' }
  // }
  // #swagger.responses[201] = {
  //   description: 'User created'
  // }
  // #swagger.responses[400] = {
  //   description: 'Error creating user'
  // }
});

router.put("/update/:id", authenticateToken, async (req, res) => {
  return userController.update(req, res);
  // #swagger.tags = ['Users']
  // #swagger.description = 'Endpoint to update a user'
  // #swagger.parameters['updateUser'] = {
  //   in: 'body',
  //   description: 'User data',
  //   required: true,
  //   type: 'object',
  //   schema: { $ref: '#/definitions/NewUser' }
  // }
});

router.delete(
  "/admin/delete/:id",
  authenticateToken,
  authorizeAdmin,
  async (req, res) => {
    return userController.delete(req, res);
  }
  // #swagger.tags = ['Admin']
  // #swagger.description = 'Endpoint to delete a user'
  // #swagger.parameters['id'] = {
  //   in: 'path',
  //   description: 'User id',
  //   required: true,
  //   type: 'integer'
  // }
  // #swagger.responses[200] = {
  //   description: 'User deleted'
  // }
  // #swagger.responses[400] = {
  //   description: 'Error deleting user'
  // }
);

module.exports = router;
