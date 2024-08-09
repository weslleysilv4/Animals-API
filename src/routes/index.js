const router = require("express").Router();
const userRouter = require("./users");
const authRouter = require("./auth");

router.use("/", userRouter);
router.use("/auth", authRouter);

module.exports = router;
