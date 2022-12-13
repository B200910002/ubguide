import Axios from 'axios';

exports.getAllPlace = async () => {
  return await Axios.get(
    `http://10.200.96.40:5000/api/v1/entertainment/get`,
  ).then(response => {});
};

exports.getByIdPlace = async id => {
  return await Axios.get(
    `http://10.200.96.40:5000/api/v1/entertainment/get/${id}`,
  ).then(response => {});
};

exports.sda = '123';
