const db = require("../db/connection");
const query = require("../const/query/Query");
const procedure = require("../const/query/Procedure");

class Picture {
  constructor() {
    this.entertainment;
    this.pictureName;
  }
  static getAll() {
    let sql = "select * fom zuragnuud;";
    return db.execute(sql);
  }
  static getByEntertainmentId(id) {
    let sql = `select zuragid, zuragner from zuragnuud where uzweruilcilgeeid = ${id}`;
    return db.execute(sql);
  }
}

module.exports = Picture;
