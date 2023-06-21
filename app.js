require('dotenv').config();

const express = require('express');

const connectDB = require('./Db/connectDB');
const developerRoute = require('./routes/developer_route');
const locationRoute = require('./routes/location_routes');
const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(express.json());

app.use('/api/v1/developer', developerRoute);
app.use('/api/v1/location', locationRoute);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}!!!`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
