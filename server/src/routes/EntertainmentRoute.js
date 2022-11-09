const express = require("express");
const router = express.Router();
const entertainmentCtrl = require("../controllers/entertainmentCtrl");
const commentCtrl = require("../controllers/commentCtrl");

//get
router.get("/get", entertainmentCtrl.getAll);
router.get("/get/:id", entertainmentCtrl.getById);
router.get("/get_comment/:id", commentCtrl.getByEntertainmentId);

//post
router.post("/post", entertainmentCtrl.createNewEntertainment);

router.post("/post_comment", commentCtrl.createNewComment);

//put

router.put("/put_comment", commentCtrl.updateComment);

//delete

router.delete('/delete_comment/:id', commentCtrl.deleteComment)

module.exports = router;
