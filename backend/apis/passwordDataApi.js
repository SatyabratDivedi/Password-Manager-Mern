const passwordModel = require("../models/passwordModel");
const jwt = require("jsonwebtoken");
const express = require("express");
const route = express.Router();

route.post("/create", checkAuth, async (req, res) => {
  const {website, username, password} = req.body;
  try {
    const savedData = await passwordModel.create({
      website,
      username,
      password,
      whichUser: req.user._id,
    });
    if (savedData) {
      console.log(savedData);
      return res.status(201).json({msg: "saved", data: savedData});
    }
  } catch (error) {
    console.log(error);
    res.status(500).json("koi problem hai create krne me");
  }
});

route.delete("/delete_one/:id", async (req, res) => {
  const existUser = await passwordModel.findById(req.params.id);
  try {
    if (existUser) {
      const deletedData = await passwordModel.findByIdAndDelete(req.params.id);
      console.log("data has been deleted");
      return res.status(202).json({msg: "data has been deleted", data: deletedData});
    }
    console.log("delete nahi huaa");
    return res.status(404).json("not able to delete");
  } catch (error) {
    console.log(error);
    return res.status(505).json("koi problem hai delete krne me");
  }
});

route.get("/get-all", checkAuth, async (req, res) => {
  const loginUserPasswordData = await passwordModel.find({whichUser: req.user._id});
  try {
    if (loginUserPasswordData) {
      return res.status(202).json({data: loginUserPasswordData});
    }
    res.status(404).json("all user has not been found");
    console.log("sbhi user nahi mile");
  } catch (error) {
    res.status.apply(505).json(error);
    console.log(error);
  }
});

route.get("/get-one/:id", async (req, res) => {
  const findData = await passwordModel.findById(req.params.id);
  try {
    if (!findData) return res.status(404).json("data not find");
    return res.status(202).json(findData);
  } catch (error) {
    console.log("ek user milne me problem aa rhi hai");
    res.status(505).json(error);
  }
});

route.put("/update-data/:id", async (req, res) => {
  const id = req.params.id;
  const updateData = req.body;
  try {
    const findData = await passwordModel.findById(id);
    console.log("findData: ", findData);
    if (!findData) return res.status(404).json({msg: "data not found"});
    const updatedData = await passwordModel.findByIdAndUpdate(id, updateData, {new: true});
    console.log("updated");
    res.status(200).json({msg: "data has been updated", data: updatedData});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});

route.post("/check-login", checkAuth, (req, res) => {
  res.status(200).json({msg: "user found", user: req.user});
});

function checkAuth(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({msg: "Unauthorized User"});
  jwt.verify(token, process.env.privateKey, (err, user) => {
    if (!user) return res.status(401).json({msg: "Unauthorized User"});
    req.user = user.user;
    next();
  });
}

module.exports = route;
