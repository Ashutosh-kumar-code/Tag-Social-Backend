//express
const express = require("express");
const route = express.Router();

const checkAccessWithSecretKey = require("../../checkAccess");

//controller
const VideoCommentController = require("../../controllers/client/videoComment.controller");

//create user wise comment for video
route.post("/createComment",  VideoCommentController.createComment);

//create like or dislike for comment
route.post("/likeOrDislike",  VideoCommentController.likeOrDislike);

//get commentType wise all comments for particular video (top, mostLiked, newest)
route.get("/getComments",  VideoCommentController.getComments);

//create user wise reply to particular comment of particular video
route.post("/createCommentReply",  VideoCommentController.createCommentReply);

//get all replies for particular comment
route.get("/repliesOfVideoComment",  VideoCommentController.repliesOfVideoComment);

module.exports = route;
