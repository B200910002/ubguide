const db = require("../db/connection");
const query = require("../const/query/Query");
const procedure = require("../const/query/Procedure");

const Address = require("./Address");

class Entertainment {
  constructor() {
    this.id;
    this.name;
    this.description;
    this.propicture;
    this.zipcode;
    this.facebook;
    this.mail;
    this.address;
  }

  static getAll() {
    let sql = "select * from uzweruilcilgee";
    return db.execute(sql);
  }

  static getById(id) {
    let sql = `select * from uzweruilcilgee where uzwerid = ${id}`;
    return db.execute(sql);
  }
}

module.exports = Entertainment;
