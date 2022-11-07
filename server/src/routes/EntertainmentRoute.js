const express = require("express");
const router = express.Router();
const entertainmentCtrl = require("../controllers/entertainmentCtrl");

//get
router.get("/get", entertainmentCtrl.getAll);
router.get("/get/:id", entertainmentCtrl.getById);

//post


//put


//delete


module.exports = router;
