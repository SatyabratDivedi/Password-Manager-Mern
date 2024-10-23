const express = require("express");
const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

const route = express();

route.post("/register", async (req, res) => {
  console.log(req.body);
  const {name, email, password} = req.body;
  try {
    const findUser = await userModel.findOne({email});
    if (findUser) return res.status(409).json({msg: "this email is already registered"});
    bcrypt.hash(password, 10, async (err, hasPassword) => {
      if (err) return res.status(500).json({msg: "Error hashing password"});
      const newUser = await userModel.create({name, email, password: hasPassword});
      console.log(newUser);
    });
    res.status(200).json({msg: "register successfully"});
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

route.post("/login", async (req, res) => {
  try {
    const findUser = await userModel.findOne({email: req.body.email});
    if (!findUser) return res.status(401).json({msg: "user not found"});
    bcrypt.compare(req.body.password, findUser.password, (err, isMatch) => {
      if (err) return res.status(500).json({msg: "Error comparing passwords"});
      if (!isMatch) {
        return res.status(401).json({msg: "Invalid credentials"});
      }
      const token = jwt.sign({user: findUser}, process.env.privateKey, {expiresIn: "1h"});
      return res.status(200).json({msg: "Login successful", token});
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

export default route;
