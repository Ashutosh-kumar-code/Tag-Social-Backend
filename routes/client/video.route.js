//express
const express = require("express");
const route = express.Router();

const checkAccessWithSecretKey = require("../../checkAccess");

//controller
const videoController = require("../../controllers/client/video.controller");

//video Unlocked
route.post("/unlockPrivateVideo",  videoController.unlockPrivateVideo);

//channel name verify when upload viodeo or shorts
route.get("/verifyChannelname",  videoController.verifyChannelname);

//upload (normal videos or shorts) by the user
route.post("/createVideo",  videoController.createVideo);

//when user share (normal videos or shorts) then shareCount increased
route.post("/shareCount",  videoController.shareCount);

//get shorts from home page directly
route.get("/shortsOfUser",  videoController.shortsOfUser);

//get all shorts for user (shorts)
route.get("/getShorts",  videoController.getShorts);

//get all normal videos for user (home)
route.get("/getVideos",  videoController.getVideos);

//get channel details of shorts for user
route.get("/channeldetailsOfShorts",  videoController.channeldetailsOfShorts);

//get all (normal videos or shorts) for user (home)
route.get("/videosOfHome",  videoController.videosOfHome);

//get particular normal video's details for user
route.get("/detailsOfVideo",  videoController.detailsOfVideo);

//create like or dislike for video (normal videos or shorts)
route.post("/likeOrDislikeOfVideo",  videoController.likeOrDislikeOfVideo);

//get all more like this (normal videos or shorts)
route.get("/getAllLikeThis",  videoController.getAllLikeThis);

//search (normal videos or shorts) for user
route.post("/search",  videoController.search);

//previous search (normal videos or shorts) for user
route.get("/searchData",  videoController.searchData);

//search shorts for user
route.post("/searchShorts",  videoController.searchShorts);

//type wise searching (All OR videos OR shorts)
route.post("/searchChannelVideoShortsByUser",  videoController.searchChannelVideoShortsByUser);

//clear all searchHistory for particular user
route.delete("/clearAllSearchHistory",  videoController.clearAllSearchHistory);

//update (normal videos or shorts) by user
route.patch("/modifyVideo",  videoController.modifyVideo);

//delete (normal videos or shorts) by user
route.delete("/deleteVideoRecord",  videoController.deleteVideoRecord);

module.exports = route;
