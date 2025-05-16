//express
const express = require("express");
const route = express.Router();

const checkAccessWithSecretKey = require("../../checkAccess");

//controller
const UserController = require("../../controllers/admin/user.controller");

//create user by admin
route.post("/fakeUser", UserController.fakeUser);

//update details of the channel or profile of the user
route.patch("/updateUser",  UserController.updateUser);

//handle activation of the users (multiple or single)
route.patch("/isActive",  UserController.isActive);

//handle block of the users (multiple or single)
route.patch("/isBlock",  UserController.isBlock);

//update password of user added by admin
route.patch("/updatePassword",  UserController.updatePassword);

//delete the users (multiple or single)
route.delete("/deleteUsers",  UserController.deleteUsers);

//get user profile
route.get("/getProfile",  UserController.getProfile);

//get users (who is added by admin or real)
route.get("/getUsers",  UserController.getUsers);

//get users who is added by admin for channel creation
route.get("/getUsersAddByAdminForChannel",  UserController.getUsersAddByAdminForChannel);

//get the all channels of the user (who has been added by admin or real)
route.get("/channelsOfUser",  UserController.channelsOfUser);

//handle unnecessary channel is inActive
route.patch("/deleteChannelByAdmin",  UserController.deleteChannelByAdmin);

module.exports = route;
