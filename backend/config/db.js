import mongoose from "mongoose";

const connectDB = async () =>{
    try{
        console.log(process.env.MONGO_URI)
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
            useCreateIndex:true,
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`.blue.bold)
    } catch(error) {
        console.log(`Error: ${error.message}`.red.bold.underline)
        process.exit(1)
    }
}

export default connectDB