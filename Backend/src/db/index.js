import mongoose from "mongoose";



const connectDB = async () => {
  try {
      const connectionInstance=  await mongoose.connect(`${process.env.MONGODB_URI}`)

    console.log(
      `\n MongoDb conected !! DB HOST:${connectionInstance.connection.host}, PORT: ${connectionInstance.connection.port}`
    );
  } catch (error) {
    console.log("Mnogoose connection error", error);
    process.exit(1);
  }
};

export default connectDB;
