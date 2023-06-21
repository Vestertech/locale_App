const getAllStates = (req, res) => {
  res.status(200).send('Route access granted');
};

module.exports = {
  getAllStates,
};
