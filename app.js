require('dotenv').config();

const express = require('express');

const developerRoute = require('./routes/developer_route');
const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use('/api/v1/developer', developerRoute);
// app.use('/api/v1/location', locationRoute)
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
const start = async () => {
  try {
    app.listen(PORT, console.log(`Server listening on ${PORT}!!!`));
  } catch (error) {
    console.log(error);
  }
};

start();
