const db = require("../db/connection");
const query = require("../const/query/Query");
const procedure = require("../const/query/Procedure");

class Address {
  constructor() {
    this.id;
    this.description;
    this.location;
    this.committee;
  }

  static async getAll() {
    let sql = "select * from hayg";
    return db.execute(sql)
  }
  static getById(id) {
    let sql = `select * from hayg where haygid = ${id};`;
    return db.execute(sql);
  }
}

class Location {
  constructor() {
    this.id;
    this.coordinateX;
    this.coordinateY;
  }
  static getAll() {
    let sql = "select * from bairshil";
    return db.execute(sql);
  }
  static getById(id) {
    let sql = `select * from bairshil where bairshilid = ${id}`;
    return db.execute(sql);
  }
}

class Committee {
  constructor() {
    this.id;
    this.cityName;
    this.state;
  }
  static getAll() {
    let sql = `select * from HorooLavlah`;
    return db.execute(sql);
  }
  static getById(id) {
    let sql = `select * from HorooLavlah where HorooCode = ${id}`;
    return db.execute(sql);
  }
}

class State {
  constructor() {
    this.id;
    this.stateName;
    this.city;
  }
  static getAll() {
    let sql = "select * from DuuregSumiinLavlah";
    return db.execute(sql);
  }
  static getById(id) {
    let sql = `select * from DuuregSumiinLavlah where DuuregSumiinCode = '${id}'`;
    return db.execute(sql);
  }
}

class City {
  constructor() {
    this.id;
    this.cityName;
  }
  static getAll() {
    let sql = "select * from HotAimgiinLavlah";
    return db.execute(sql);
  }
  static getById(id) {
    let sql = `select * from HotAimgiinLavlah where HotAimgiinCode = '${id}'`;
    return db.execute(sql);
  }
}

module.exports = { Address, Location, Committee, State, City };
