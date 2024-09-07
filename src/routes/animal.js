const router = require("express").Router();
const AnimalController = require("../controller/animalController");
const { authenticateToken } = require("../controller/authController");

router.post("/animals", authenticateToken, async (req, res) => {
  return AnimalController.create(req, res);
  // #swagger.tags = ['Animals']
  // #swagger.description = 'Endpoint to create a new animal'
  // #swagger.parameters['newAnimal'] = {
  //   in: 'body',
  //   description: 'Animal data',
  //   required: true,
  //   type: 'object',
  //   schema: { $ref: '#/definitions/Animal' }
  // }
  // #swagger.responses[201] = {
  //   description: 'Animal created'
  // }
  // #swagger.responses[400] = {
  //   description: 'Error creating animal'
  // }
});

router.get("/animals", async (req, res) => {
  return AnimalController.getAll(req, res);
  // #swagger.tags = ['Animals']
  // #swagger.description = 'Endpoint to get all animals'
  // #swagger.responses[200] = {
  //   description: 'Animals found'
  // }
  // #swagger.responses[400] = {
  //   description: 'Error searching for animals'
  // }
});

router.get("/animals/:id", async (req, res) => {
  return AnimalController.getById(req, res);
  // #swagger.tags = ['Animals']
  // #swagger.description = 'Endpoint to get an animal by ID'
  // #swagger.responses[200] = {
  //   description: 'Animal found'
  // }
  // #swagger.responses[400] = {
  //   description: 'Error searching for animal'
  // }
});

router.get("/animals/user/:id", async (req, res) => {
  return AnimalController.getAnimalByUserId(req, res);
  // #swagger.tags = ['Animals']
  // #swagger.description = 'Endpoint to get an animal by user ID'
  // #swagger.responses[200] = {
  //   description: 'Animal found'
  // }
  // #swagger.responses[400] = {
  //   description: 'Error searching for animal'
  // }
});

router.get("/animal/token", authenticateToken, async (req, res) => {
  return AnimalController.getAnimalByToken(req, res);
  // #swagger.tags = ['Animals']
  // #swagger.description = 'Endpoint to get an animal by token'
  // #swagger.responses[200] = {
  //   description: 'Animal found',
  //   schema: { $ref: '#/definitions/Animal' }
  // }
  // #swagger.responses[400] = {
  //   description: 'Error searching for animal'
  // }
});

router.get("/animals/breed/:breed", authenticateToken, async (req, res) => {
  return AnimalController.getAnimalByBreed(req, res);
  // #swagger.tags = ['Animals']
  // #swagger.description = 'Endpoint to get an animal by breed'
  // #swagger.responses[200] = {
  //   description: 'Animal found'
  // }
  // #swagger.responses[400] = {
  //   description: 'Error searching for animal'
  // }
});

router.put("/animals/:id", authenticateToken, async (req, res) => {
  return AnimalController.update(req, res);
  // #swagger.tags = ['Animals']
  // #swagger.description = 'Endpoint to update an animal'
  // #swagger.parameters['updateAnimal'] = {
  //   in: 'body',
  //   description: 'Animal data',
  //   required: true,
  //   type: 'object',
  //   schema: { $ref: '#/definitions/Animal' }
  // }
  // #swagger.responses[200] = {
  //   description: 'Animal updated'
  // }
  // #swagger.responses[400] = {
  //   description: 'Error updating animal'
  // }
});

router.delete("/animals/:id", authenticateToken, async (req, res) => {
  return AnimalController.delete(req, res);
  // #swagger.tags = ['Animals']
  // #swagger.description = 'Endpoint to delete an animal'
  // #swagger.responses[200] = {
  //   description: 'Animal deleted'
  // }
  // #swagger.responses[400] = {
  //   description: 'Error deleting animal'
  // }
});

module.exports = router;
