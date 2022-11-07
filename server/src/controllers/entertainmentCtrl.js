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
      numbers,
      pictures,
    } = req.body;

    let city = new Address.City(
      haygid.horoolavlah_horoocode.DuuregSumiinLavlah_DuuregSumiinCode.HotAimgiinLavlah_HotAimgiinCode.HotAimgiinCode,
      haygid.horoolavlah_horoocode.DuuregSumiinLavlah_DuuregSumiinCode.HotAimgiinLavlah_HotAimgiinCode.HotAimgiinNer
    );
    let cityCode = await city.save();

    let state = new Address.State(
      haygid.horoolavlah_horoocode.DuuregSumiinLavlah_DuuregSumiinCode.DuuregSumiinCode,
      haygid.horoolavlah_horoocode.DuuregSumiinLavlah_DuuregSumiinCode.DuuregSumiinNer,
      cityCode[0][0][0].code
      // city
    );
    let stateCode = await state.save();

    let committee = new Address.Committee(
      haygid.horoolavlah_horoocode.HorooCode,
      haygid.horoolavlah_horoocode.HorooNer,
      stateCode[0][0][0].code
      // state
    );
    let committeeCode = await committee.save();
    committee.id = committeeCode[0][0][0].horoocode;

    let location = new Address.Location(
      haygid.bairshilid.bairshilid,
      haygid.bairshilid.x,
      haygid.bairshilid.y
    );
    let locationCode = await location.save();
    location.id = locationCode[0][0][0].bairshilid;

    let address = new Address.Address(
      haygid.haygid,
      haygid.haygdelgerengui,
      locationCode[0][0][0].bairshilid,
      committeeCode[0][0][0].horoocode
      // location,
      // committee
    );
    let addressCode = await address.save();
    address.id = addressCode[0][0][0].haygid;

    let entertainment = new Entertainment(
      uzwerid,
      ner,
      delgerengui,
      prozurag,
      zipcode,
      facebook,
      mail,
      ognoo,
      addressCode[0][0][0].haygid
      // address
    );

    let entertainmentCode = await entertainment.save();
    entertainment.id = entertainmentCode[0][0][0].uzwerid;

    let utas;

    for (let i = 0; i < numbers.length; i++) {
      utas = new Phone(entertainment.id, numbers[i].utas);
      await utas.save();
    }

    let pic;
    for (let i = 0; i < pictures.length; i++) {
      pic = new Picture(entertainment.id, pictures[i].zuragner);
      await pic.save()
    }

    res.status(201).json({ message: "entertainment created!" });
  } catch (error) {
    next(error);
  }
};
