const express = require("express");
const cookieParser = require("cookie-parser");
const indexRouter = require("./routes/index");
const sequelize = require("./config/database");
const dotenv = require("dotenv");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("../swagger_output.json");

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use("/api", indexRouter);
sequelize.sync().then(async () => {
  console.log("🚀 Database connected and synchronized");
});

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${process.env.PORT}`);
});

module.exports = app;
