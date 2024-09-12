import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv"
import { connectDB } from "./mongodb.js";


dotenv.config({})
const PORT = process.env.PORT || 3000



//creating an express server called app
const app = express();

//middlwares
app.use(express.json())
app.use(cookieParser())
app.use(urlencoded({extended:true}))

const corsOptions = {
    origin:"http://localhost:5137",
    credentials: true
}
app.use(cors(corsOptions))








app.listen(PORT, ()=>{
    connectDB();
    console.log("Server is up and running on port: "+ PORT )
})


