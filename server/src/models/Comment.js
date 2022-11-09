const db = require("../db/connection");
const query = require("../const/query/Query");
const procedure = require("../const/query/Procedure");

class Comment {
  constructor(comment, rate, user, entertainment) {
    this.id;
    this.comment = comment;
    this.rate = rate;
    this.date;
    this.user = user;
    this.entertainment = entertainment;
  }
  static getAll() {
    let sql = `select * from comment`;
    return db.execute(sql);
  }
  static getByEntertainmentId(id) {
    let sql = `select * from comment where uzwerid = ${id}`;
    return db.execute(sql);
  }
  save() {
    let sql = `call insertcomment('${this.comment}',${this.rate},${this.user},${this.entertainment});`;
    return db.execute(sql);
  }
}

module.exports = Comment;
