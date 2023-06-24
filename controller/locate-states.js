const getAllStates = async (req, res) => {
  try {
    const states = await fetchRegions();
    res.status(200).json({ states });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

async function fetchRegions() {}

// const getAllStates = async (req, res) => {
//   try {
//     const states = await fetchStates();
//     res.json(states);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// async function fetchStates() {
//   try {
//     const response = await axios.get(
//       'https://maps.googleapis.com/maps/api/place/details/json',
//       {
//         params: {
//           input: 'Nigeria',
//           types: '(states)',
//           key: 'AIzaSyBhWnudUxJqeLPnsagb7dngGUTOD1rWg_Q',
//         },
//       }
//     );
//     console.log(response);
//   } catch (err) {
//     res.status(500).json({ error: 'Internal server error' });
//   }

// const states = response.data.predictions.map(
//   (prediction) => prediction.description
// );
// return states;
// }

module.exports = {
  getAllStates,
};
