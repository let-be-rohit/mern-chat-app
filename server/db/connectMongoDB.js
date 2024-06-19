import mongoose from "mongoose";


const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to Data Base");
    } catch (error) {
        console.log("Error to connecting MongoDB ", error.message);
    }
  
}



export default connectMongoDB;
