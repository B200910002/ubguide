const db = require("../db/connection");
const query = require("../const/query/Query");
const procedure = require("../const/query/Procedure");

class Address {
  constructor(id, description, location, committee) {
    this.id = id;
    this.description = description;
    this.location = location;
    this.committee = committee;
  }
  static async getAll() {
    let sql = "select * from hayg";
    return db.execute(sql);
  }
  static getById(id) {
    let sql = `select * from hayg where haygid = ${id};`;
    return db.execute(sql);
  }
  save() {
    let sql = `call insertHayg('${this.description}',${this.location},${this.committee})`;
    return db.execute(sql);
  }
}

class Location {
  constructor(id, coordinateX, coordinateY) {
    this.id = id;
    this.coordinateX = coordinateX;
    this.coordinateY = coordinateY;
  }
  static getAll() {
    let sql = "select * from bairshil";
    return db.execute(sql);
  }
  static getById(id) {
    let sql = `select * from bairshil where bairshilid = ${id}`;
    return db.execute(sql);
  }
  save() {
    let sql = `call insertbairshil(${this.coordinateX}, ${this.coordinateY});`;
    return db.execute(sql);
  }
}

class Committee {
  constructor(id, committeeName, state) {
    this.id = id;
    this.committeeName = committeeName;
    this.state = state;
  }
  static getAll() {
    let sql = `select * from HorooLavlah`;
    return db.execute(sql);
  }
  static getById(id) {
    let sql = `select * from HorooLavlah where HorooCode = ${id}`;
    return db.execute(sql);
  }
  save() {
    let sql = `call insertHorooLavlah('${this.committeeName}', '${this.state}');`;
    return db.execute(sql);
  }
}

class State {
  constructor(id, stateName, city) {
    this.id = id;
    this.stateName = stateName;
    this.city = city;
  }
  static getAll() {
    let sql = "select * from DuuregSumiinLavlah";
    return db.execute(sql);
  }
  static getById(id) {
    let sql = `select * from DuuregSumiinLavlah where DuuregSumiinCode = '${id}'`;
    return db.execute(sql);
  }
  save() {
    let sql = `call insertDuuregSumiinLavlah( '${this.id}', '${this.stateName}','${this.city}');`;
    return db.execute(sql);
  }
}

class City {
  constructor(id, cityName) {
    this.id = id;
    this.cityName = cityName;
  }
  static getAll() {
    let sql = "select * from HotAimgiinLavlah";
    return db.execute(sql);
  }
  static getById(id) {
    let sql = `select * from HotAimgiinLavlah where HotAimgiinCode = '${id}'`;
    return db.execute(sql);
  }
  save() {
    let sql = `call insertHotAimgiinLavlah('${this.id}', '${this.cityName}');`;
    return db.execute(sql);
  }
}

module.exports = { Address, Location, Committee, State, City };
