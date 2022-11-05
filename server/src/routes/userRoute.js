const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/userCtrl");

//get
router.get("/get_all_information", userCtrl.getAllUsers);
router.get('/get/:id', userCtrl.getUserById)

// // post
router.post('/insert', userCtrl.createNewUser);

// //put
router.put('/update_name', userCtrl.updateName);
router.put('/update_mail', userCtrl.updateMail);
router.put('/update_username', userCtrl.updateUsername);
router.put('/update_password', userCtrl.updatePassword);

// //delete
// router.delete();

module.exports = router;
