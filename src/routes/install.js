const router = require("express").Router();
const installController = require("../controller/installController");

router.get(
  "/install",
  installController.install
  // #swagger.tags = ['Install']
  // #swagger.description = 'Endpoint to install the database'
  // #swagger.responses[200] = {
  //   description: 'Database installed'
  // }
  // #swagger.responses[400] = {
  //   description: 'Error installing database'
  // }
);

module.exports = router;
