import mongoose from "mongoose";
const Schema = mongoose.Schema;

let imageSchema = new Schema({
  "id": Number,
  "artwork": Object
});

export default mongoose.model("images", imageSchema);




