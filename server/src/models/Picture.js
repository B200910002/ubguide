const db = require("../db/connection");
const query = require("../const/query/Query");
const procedure = require("../const/query/Procedure");

class Picture {
  constructor() {
    this.entertainment;
    this.pictureName;
  }
}

module.exports = Picture
