const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Projeto 2 - Backend",
    description:
      "Projeto criado para a matéria de BackEnd do curso de ADS - UTFPR",
    contact: {
      name: "Weslley Silva",
      email: "weslleysilva.swe@gmail.com",
    },
  },
  host: "localhost:3001/api",
  schemes: ["http"],
};

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./src/routes/*.js"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  console.log("Swagger documentation generated!");
});
