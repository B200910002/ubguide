const express = require("express");
const router = express.Router();
const entertainmentCtrl = require("../controllers/entertainmentCtrl");

//get
router.get("/get", entertainmentCtrl.getAll);
router.get("/get/:id", entertainmentCtrl.getById);

//post
router.post("/post", entertainmentCtrl.createNewEntertainment);

//put

//delete

module.exports = router;
