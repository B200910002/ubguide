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
    const location = new Address.Location();
    const city = new Address.City();
    const state = new Address.State();
    const committee = new Address.Committee();
    const address = new Address.Address();

    return db.execute(sql);
  }
}

module.exports = Entertainment;
