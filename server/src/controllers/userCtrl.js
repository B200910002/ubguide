const User = require("../models/User");

exports.getAllUsers = async (req, res, next) => {
  try {
    const [users, _] = await User.findAll();

    res.status(200).json({ count: users.length, users });
  } catch (err) {
    next(err);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    let userId = req.params.id;
    let [user, _] = await User.findById(userId);

    res.status(200).json({ user: user[0] });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    let { mail, password } = req.body;
    console.log(mail, password);
    let user = await User.login(mail, password);
    console.log(user[0][0][0]);
    if (user[0][0][0] === undefined)
      res.status(200).json({ message: "Login failed!" });
    else {
      user[0][0][0].access_token = "1234";
      res.status(200).json(user[0][0][0]);
    }
  } catch (error) {
    next(error);
  }
};

exports.createNewUser = async (req, res, next) => {
  try {
    let { name, mail, username, password } = req.body;
    console.log(name, mail, username, password);
    let user = new User(name, mail, username, password);
    user = await user.save();
    res.status(201).json({ message: "User inserted" });
  } catch (err) {
    next(err);
  }
};

exports.updateName = async (req, res, next) => {
  try {
    let { userid, name } = req.body;
    let [user, _] = await User.changeName(userid, name);
    res.status(201).json({ message: "User name updated" });
  } catch (err) {
    next(err);
  }
};

exports.updateMail = async (req, res, next) => {
  try {
    let { userid, mail } = req.body;
    let [user, _] = await User.changeMail(userid, mail);
    res.status(201).json({ message: "User mail updated" });
  } catch (err) {
    next(err);
  }
};

exports.updateUsername = async (req, res, next) => {
  try {
    let { userid, username } = req.body;
    let [user, _] = await User.changeUsername(userid, username);
    res.status(201).json({ message: "User username updated" });
  } catch (err) {
    next(err);
  }
};

exports.updatePassword = async (req, res, next) => {
  try {
    let { userid, password } = req.body;
    let [user, _] = await User.changePassword(userid, password);
    res.status(201).json({ message: "User password updated" });
  } catch (err) {
    next(err);
  }
};
