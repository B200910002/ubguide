const db = require("../db/connection");
const query = require("../const/query/Query");
const procedure = require("../const/query/Procedure");

const Address = require("./Address");

class Entertainment {
  constructor(
    id,
    name,
    description,
    propicture,
    zipcode,
    facebook,
    mail,
    date,
    address
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.propicture = propicture;
    this.zipcode = zipcode;
    this.facebook = facebook;
    this.mail = mail;
    this.date = date;
    this.address = address;
  }

  static getAll() {
    let sql = "select * from uzweruilcilgee";
    return db.execute(sql);
  }

  static getById(id) {
    let sql = `select * from uzweruilcilgee where uzwerid = ${id}`;
    return db.execute(sql);
  }
  save() {
    let d = new Date(this.date);
    let yyyy = d.getFullYear();
    let mm = d.getMonth() + 1;
    let dd = d.getDate();
    this.date = `${yyyy}-${mm}-${dd}`;
    let sql = `call insertuzweruilcilgee('${this.name}', '${this.description}','${this.propicture}','${this.zipcode}','${this.facebook}','${this.mail}', '${this.date}','${this.address}');`;
    return db.execute(sql);
  }
}

module.exports = Entertainment;
