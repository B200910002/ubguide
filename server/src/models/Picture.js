const db = require("../db/connection");
const query = require("../const/query/Query");
const procedure = require("../const/query/Procedure");

class Picture {
  constructor(entertainmentId, pictureName) {
    this.entertainmentId = entertainmentId;
    this.pictureName = pictureName;
  }
  static getAll() {
    let sql = "select * fom zuragnuud;";
    return db.execute(sql);
  }
  static getByEntertainmentId(id) {
    let sql = `select zuragid, zuragner from zuragnuud where uzweruilcilgeeid = ${id}`;
    return db.execute(sql);
  }
  save() {
    let sql = `call insertzuragnuud('${this.pictureName}',${this.entertainmentId});`;
    return db.execute(sql);
  }
}

module.exports = Picture;
