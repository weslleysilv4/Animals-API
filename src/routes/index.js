const router = require("express").Router();
const userRouter = require("./users");
const authRouter = require("./auth");
const animalRouter = require("./animal");
const installRouter = require("./install");

router.use("/", userRouter);
router.use("/", animalRouter);
router.use("/", installRouter);
router.use("/auth", authRouter);

router.get("/install", async (req, res) => {
  res.json({ message: "Install route" });
});

module.exports = router;
