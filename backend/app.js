const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const passwordRoute = require("./apis/passwordDataApi.js");
const userRoute = require("./apis/userApi.js");

const app = express();
app.use(express.json());
dotenv.config();
app.use(cors({
  // origin:'https://password-manager-mern.vercel.app',
  origin:'http://localhost:5173',
  credentials:true
}));

const PORT = process.env.PORT || 3000;
const URL = process.env.MONGO_URL;

mongoose
  .connect(URL)
  .then(() => {
    console.log("mongoDB se connect ho gya hai");
    app.listen(PORT, () => {
      console.log(`port number ${PORT} pr`);
    });  
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("app launch successfully");
});

app.use("/api", passwordRoute);
app.use("/api", userRoute);
