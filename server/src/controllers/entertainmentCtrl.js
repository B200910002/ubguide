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
      const [committee] = await Address.Committee.getById(
        address[0].horoolavlah_horoocode
      );
      const [state] = await Address.State.getById(
        committee[0].DuuregSumiinLavlah_DuuregSumiinCode
      );
      const [city] = await Address.City.getById(
        state[0].HotAimgiinLavlah_HotAimgiinCode
      );

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
    const [committee] = await Address.Committee.getById(
      address[0].horoolavlah_horoocode
    );
    const [state] = await Address.State.getById(
      committee[0].DuuregSumiinLavlah_DuuregSumiinCode
    );
    const [city] = await Address.City.getById(
      state[0].HotAimgiinLavlah_HotAimgiinCode
    );
    const [numbers] = await Phone.getByEntertainmentId(
      entertainment[0].uzwerid
    );
    const [pictures] = await Picture.getByEntertainmentId(
      entertainment[0].uzwerid
    );

    state[0].HotAimgiinLavlah_HotAimgiinCode = city[0];
    committee[0].DuuregSumiinLavlah_DuuregSumiinCode = state[0];
    address[0].horoolavlah_horoocode = committee[0];
    address[0].bairshilid = location[0];
    entertainment[0].haygid = address[0];
    entertainment[0].numbers = numbers;
    entertainment[0].pictures = pictures;

    res.status(200).json(entertainment[0]);
  } catch (err) {
    next(err);
  }
};

exports.createNewEntertainment = async (req, res, next) => {
  try {
    let {
      uzwerid,
      ner,
      delgerengui,
      prozurag,
      zipcode,
      facebook,
      mail,
      ognoo,
      haygid,
    } = req.body;

    let city = new Address.City(
      haygid.horoolavlah_horoocode.DuuregSumiinLavlah_DuuregSumiinCode.HotAimgiinLavlah_HotAimgiinCode.HotAimgiinCode,
      haygid.horoolavlah_horoocode.DuuregSumiinLavlah_DuuregSumiinCode.HotAimgiinLavlah_HotAimgiinCode.HotAimgiinNer
    );
    city = await city.save();

    let state = new Address.State(
      haygid.horoolavlah_horoocode.DuuregSumiinLavlah_DuuregSumiinCode.DuuregSumiinCode,
      haygid.horoolavlah_horoocode.DuuregSumiinLavlah_DuuregSumiinCode.DuuregSumiinNer,
      city[0][0][0].code
    );
    state = await state.save();

    let committee = new Address.Committee(
      haygid.horoolavlah_horoocode.HorooCode,
      haygid.horoolavlah_horoocode.HorooNer,
      state[0][0][0].code
    );
    committee = await committee.save();

    let location = new Address.Location(
      haygid.bairshilid.bairshilid,
      haygid.bairshilid.x,
      haygid.bairshilid.y
    );
    location = await location.save();

    let address = new Address.Address(
      haygid.haygid,
      haygid.haygdelgerengui,
      location[0][0][0].bairshilid,
      committee[0][0][0].horoocode
    );
    address = await address.save();

    let entertainment = new Entertainment(
      uzwerid,
      ner,
      delgerengui,
      prozurag,
      zipcode,
      facebook,
      mail,
      ognoo,
      address[0][0][0].haygid
    );

    entertainment = await entertainment.save();
    entertainment.id = entertainment[0][0][0].uzwerid;
    console.log(entertainment);

    res.status(201).json({ message: "city created" });
  } catch (error) {
    next(error);
  }
};
