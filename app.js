require('dotenv').config();

const express = require('express');

const connectDB = require('./Db/connectDB');

const Cache = require('./config/redis');

const developerRoute = require('./routes/developer_route');
const createRoute = require('./routes/create');
const locationRoute = require('./routes/location_routes');
const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');

const authenticateKey = require('./middlewares/authenticate_api_key');
const cacheMiddleware = require('./middlewares/cache_middleWare');

const app = express();
app.use(express.json());

app.use('/api/v1/developer', developerRoute);
app.use('/api/v1/create', createRoute);
app.use('/api/v1/location', authenticateKey, cacheMiddleware, locationRoute);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);

    // connect to Redis
    Cache.connect();

    app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}!!!`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
