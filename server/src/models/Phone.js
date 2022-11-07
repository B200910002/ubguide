const db = require("../db/connection");
const query = require("../const/query/Query");
const procedure = require("../const/query/Procedure");

class Phone {
  constructor(entertainmentId, number) {
    this.id;
    this.entertainmentId = entertainmentId;
    this.number = number;
  }
  static getAll() {
    let sql = "select * from utaslavlah";
    return db.execute(sql);
  }
  static getByEntertainmentId(id) {
    let sql = `select utaslavlahid,utas from utaslavlah where uzweruilcilgeeid = ${id};`;
    return db.execute(sql);
  }
  save() {
    let sql = `call insertutaslavlah('${this.number}',${this.entertainmentId});`;
    return db.execute(sql);
  }
}

module.exports = Phone;
