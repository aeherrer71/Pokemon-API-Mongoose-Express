import mongoose from "mongoose";


const url = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/pokemon_db"
mongoose.set("returnOriginal", false);
 
mongoose
  .connect(url)
  .catch((err) => {
    console.log(`Error connection go MongoDB: ${err.message}`);
  });

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from MongoDB!");
});

mongoose.connection.on("error", (err) => {
  console.log(`MongoDB connection error: ${err}`);
});

export default mongoose.connection;
