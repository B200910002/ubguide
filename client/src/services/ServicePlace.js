const Axios = require('axios');

exports.getAllPlace = async () => {
  await Axios(`http://10.200.96.40:5000/api/v1/entertainment/get`).then(
    response => {
      console.log(response);
    },
  );
};

exports.getByIdPlace = async id => {
  return await Axios.get(
    `http://10.200.96.40:5000/api/v1/entertainment/get/${id}`,
  ).then(response => {
    console.log('sda2');
  });
};
