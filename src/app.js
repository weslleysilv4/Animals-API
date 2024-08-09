const express = require("express");
const cookieParser = require("cookie-parser");
const indexRouter = require("./routes/index");
const sequelize = require("./config/database");
const dotenv = require("dotenv");
const User = require("./models/User");

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api", indexRouter);
sequelize.sync({ force: true }).then(async () => {
  await User.create({
    username: "admin",
    password: "admin",
    isAdmin: true,
  });
  console.log("🚀 Database connected and synchronized");
});
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${process.env.PORT}`);
});

module.exports = app;
