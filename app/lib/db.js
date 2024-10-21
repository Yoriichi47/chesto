import mongoose from "mongoose"

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        // console.log("Mongo DB uri: ", process.env.MONGODB_URI)
    } catch(error){
        console.log("Connection failed: ", error.message)
    }
}

export default connectDB