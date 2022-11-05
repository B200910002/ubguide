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
    let [hayg] = await db.execute(sql);

    for (let i = 0; i < hayg.length; i++) {
      const [location] = await Location.getById(hayg[i].bairshilid);
      const [horoo] = await Committee.getById(hayg[i].horoolavlah_horoocode);
      hayg[i].bairshilid = location[0];
      hayg[i].horoolavlah_horoocode = horoo[0];
    }

    return [hayg];
  }
  static async getById(id) {
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
  static async getById(id) {
    let sql = `select * from HorooLavlah where HorooCode = ${id}`;
    let [committee] = await db.execute(sql);
    let [state] = await State.getById(
      committee[0].DuuregSumiinLavlah_DuuregSumiinCode
    );
    committee[0].DuuregSumiinLavlah_DuuregSumiinCode = state[0];
    return [committee];
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
  static async getById(id) {
    let sql = `select * from DuuregSumiinLavlah where DuuregSumiinCode = '${id}'`;
    let [state] = await db.execute(sql);
    let [city] = await City.getById(state[0].HotAimgiinLavlah_HotAimgiinCode);
    state[0].HotAimgiinLavlah_HotAimgiinCode = city[0];
    console.log(city);
    return [state];
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
