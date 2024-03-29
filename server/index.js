import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import route from "./Routes/UserApi.js";

const app = express();
app.use(express.json());
dotenv.config();
app.use(cors({
    origin:'https://password-manager-mern.onrender.com'
}))

const PORT = process.env.PORT || 3000;
const URL = process.env.MONGO_URL;

mongoose.connect(URL).then(()=>{
    console.log('mongoDB se connect ho gya hai');
    app.listen(PORT,()=>{
        console.log(`port number ${PORT} pr`);
    })
}).catch((err)=>{
    console.log(err)
})

app.use("/api", route);