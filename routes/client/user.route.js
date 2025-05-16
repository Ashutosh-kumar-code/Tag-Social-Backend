//express
const express = require("express");
const route = express.Router();

const checkAccessWithSecretKey = require("../../checkAccess");

//controller
const UserController = require("../../controllers/client/user.controller");

//user login or sign up
route.post("/login", UserController.store);

//check the user is exists or not for loginType 4 (email-password)
route.post("/checkUser",  UserController.checkUser);

//check referral code is valid and apply referral code by user
route.patch("/validateAndApplyReferralCode", UserController.validateAndApplyReferralCode);

//earn coin from watching ad
route.patch("/handleAdWatchReward",  UserController.handleAdWatchReward);

//earn coin from engagement video reward
route.patch("/handleEngagementVideoWatchReward", UserController.handleEngagementVideoWatchReward);

//get user profile who login
route.get("/profile", UserController.getProfile);

//update details of the channel (create your channel button)
route.patch("/update",  UserController.update);

//update profile of the user (when user login or signUp)
route.patch("/updateProfile", UserController.updateProfile);

//update password
route.patch("/updatePassword", UserController.updatePassword);

//set password
route.post("/setPassword", UserController.setPassword);

//get particular channel's details (home page)
route.get("/detailsOfChannel", UserController.detailsOfChannel);

//get particular's channel's videoType wise videos (videos, shorts) (your videos)
route.get("/videosOfChannel", UserController.videosOfChannel);

//get particular's channel's playLists
route.get("/playListsOfChannel", UserController.playListsOfChannel);

//get particular channel's about
route.get("/aboutOfChannel",  UserController.aboutOfChannel);

//search channel for user
route.post("/searchChannel", UserController.searchChannel);

//delete user account
route.delete("/deleteUserAccount", UserController.deleteUserAccount);

//get referral history of particular user
route.get("/loadReferralHistoryByUser",  UserController.loadReferralHistoryByUser);

//get coin history of particular user
route.get("/retriveCoinHistoryByUser",  UserController.retriveCoinHistoryByUser);

//get wallet history of particular user
route.get("/fetchWalletHistoryByUser", UserController.fetchWalletHistoryByUser);

module.exports = route;
