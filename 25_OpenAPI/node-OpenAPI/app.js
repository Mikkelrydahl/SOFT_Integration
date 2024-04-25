import express from "express";
const app = express();

import userRouter from "./routers/usersRouters.js";
app.use(userRouter);

const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => console.log("Sever is running on port", PORT));

const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Users',
      version: '1.0.0',
    },
  },
  apis: ['./src/routes*.js'], // files containing annotations as above
};

import swaggerUi from "swagger-ui-express";
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swagger.JSDoc(swaggerOptions)));