import mongoose from "mongoose";


export const connectDB = async()=>{
    try{
        mongoose.connect(process.env.MONGO)
        console.log("database online")
    }
    catch(err){
        console.log("error connecting database", err)
    }
}

