const Comment = require("../models/Comment");
const User = require("../models/User");

exports.getAll = async (req, res, next) => {};

exports.getByEntertainmentId = async (req, res, next) => {
  try {
    let uzwerid = req.params.id;
    let [comments, _] = await Comment.getByEntertainmentId(uzwerid);

    res.status(200).json({ count: comments.length, comments });
  } catch (err) {
    next(err);
  }
};

exports.createNewComment = async (req, res, next) => {
  try {
    let { commenttxt, rating, userid, uzwerid } = req.body;
    let comment = new Comment(commenttxt, rating, userid, uzwerid);
    let commentId = await comment.save();
    res.status(201).json({ message: "comment created!" });
  } catch (err) {
    next(err);
  }
};

exports.updateComment = async (req, res, next) => {
  try {
    res.status(201).json({ message: "comment updated!" });
  } catch (err) {
    next(err);
  }
};

exports.deleteComment = async (req, res, next) => {
  try {
    res.status(201).json({ message: "comment deleted!" });
  } catch (err) {
    next(err);
  }
};
