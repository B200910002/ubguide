const Address = require("../models/Address");
const Entertainment = require("../models/Entertainment");
const Phone = require("../models/Phone");
const Picture = require("../models/Picture");

exports.get = async (req, res, next) => {
  try {
    const [entertainments, _] = await Entertainment.getAll();
    const [address] = await Address.Address.getAll();
    entertainments.forEach((element) => {
      address.forEach((element1) => {
        if (element.haygid == element1.haygid) {
          element.haygid = element1;
        }
      });
    });
    res.status(200).json({ count: entertainments.length, entertainments });
  } catch (err) {
    next(err);
  }
};
