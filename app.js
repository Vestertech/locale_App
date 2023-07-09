require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

// Swagger
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./Api_documentation.yml");

const connectDB = require("./Db/connectDB");

// const Cache = require('./config/redis');

const developerRoute = require("./src/routes/developer_route");
const createRoute = require("./src/routes/create");
const locationRoute = require("./src/routes/location_routes");

// Middlewares
const {
  authenticateKey,
  cacheMiddleware,
  rateLimit,
  errorHandler,
  notFound,
  jwtAuthentication,
} = require("./src/middlewares");

const app = express();
app.use(rateLimit);
app.use(express.json());
app.use(cors());
// app.use(helmet());

app.get("/", (req, res) => {
  res.send(
    '<h1>Welcome to the Locale API</h1><a href="/api-docs">API Documentation</a>'
  );
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/v1/developer", developerRoute);
app.use("/api/v1/create", createRoute);
// app.use("/api/v1/create", jwtAuthentication, createRoute);
app.use("/api/v1/location", authenticateKey, cacheMiddleware, locationRoute);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);

    // connect to Redis
    // Cache.connect();

    app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}!!!`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
