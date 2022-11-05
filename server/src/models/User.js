const db = require("../db/connection");
const query = require("../const/query/Query");
const procedure = require("../const/query/Procedure");

class User {
  constructor(name, mail, username, password) {
    this.name = name;
    this.mail = mail;
    this.username = username;
    this.password = password;
  }

  save() {
    return db.execute(query.insertUser, [
      this.name,
      this.mail,
      this.username,
      this.password,
    ]);
  }

  static changeName(id, newName) {
    return db.execute(procedure.updateUserName, [id, newName]);
  }

  static changeMail(id, newMail) {
    return db.execute(procedure.updateUserMail, [id, newMail]);
  }

  static changeUsername(id, newUsername) {
    return db.execute(procedure.updateUserUsername, [id, newUsername]);
  }

  static changePassword(id, newPassword) {
    return db.execute(procedure.updateUserPassword, [id, newPassword]);
  }

  static findAll() {
    return db.execute(query.selectAllUser);
  }

  static findById(id) {
    return db.execute(query.selectByIdUser, [id]);
  }
}

module.exports = User;
