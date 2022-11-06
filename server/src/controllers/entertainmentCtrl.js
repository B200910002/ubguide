const Address = require("../models/Address");
const Entertainment = require("../models/Entertainment");
const Phone = require("../models/Phone");
const Picture = require("../models/Picture");

exports.getAll = async (req, res, next) => {
  try {
    const [entertainments, _] = await Entertainment.getAll();
    for (let i = 0; i < entertainments.length; i++) {
      const [address] = await Address.Address.getById(entertainments[i].haygid);
      const [location] = await Address.Location.getById(address[0].bairshilid);
      const [committee] = await Address.Committee.getById(address[0].horoolavlah_horoocode);
      const [state] = await Address.State.getById(committee[0].DuuregSumiinLavlah_DuuregSumiinCode);
      const [city] = await Address.City.getById(state[0].HotAimgiinLavlah_HotAimgiinCode);

      state[0].HotAimgiinLavlah_HotAimgiinCode = city[0];
      committee[0].DuuregSumiinLavlah_DuuregSumiinCode = state[0];
      address[0].horoolavlah_horoocode = committee[0];
      address[0].bairshilid = location[0];
      entertainments[i].haygid = address[0];
    }

    res.status(200).json({ count: entertainments.length, entertainments });
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    let uzwerid = req.params.id;
    const [entertainment, _] = await Entertainment.getById(uzwerid);
    const [address] = await Address.Address.getById(entertainment[0].haygid);
    const [location] = await Address.Location.getById(address[0].bairshilid);
    const [committee] = await Address.Committee.getById(address[0].horoolavlah_horoocode);
    const [state] = await Address.State.getById(committee[0].DuuregSumiinLavlah_DuuregSumiinCode);
    const [city] = await Address.City.getById(state[0].HotAimgiinLavlah_HotAimgiinCode);
    const [phone] = await Phone.getByEntertainmentId(entertainment[0].uzwerid);

    state[0].HotAimgiinLavlah_HotAimgiinCode = city[0];
    committee[0].DuuregSumiinLavlah_DuuregSumiinCode = state[0];
    address[0].horoolavlah_horoocode = committee[0];
    address[0].bairshilid = location[0];
    entertainment[0].haygid = address[0];

    // console.log(phone)
    entertainment[0].phone = phone

    res.status(200).json(entertainment[0]);
  } catch (err) {
    next(err);
  }
};
