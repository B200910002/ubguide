const Address = require("../models/Address");

exports.getAll = async (req, res, next) => {
  try {
    const [address, _] = await Address.Address.getAll();
    const [location] = await Address.Location.getAll();
    const [committee] = await Address.Committee.getAll();
    const [state] = await Address.State.getAll();
    const [city] = await Address.City.getAll();

    res.status(200).json({ count: address.length, address });
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const [address, _] = await Address.Address.getById();
    const [location] = await Address.Location.getById();
    const [committee] = await Address.Committee.getById();
    const [state] = await Address.State.getById();
    const [city] = await Address.City.getById();

    res.status(200).json({ count: address.length, address });
  } catch (err) {
    next(err);
  }
};
