const express = require("express");
const router = express.Router();
const entertainmentCtrl = require("../controllers/entertainmentCtrl");

//get
router.get("/get", entertainmentCtrl.get);

module.exports = router;
