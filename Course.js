
import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
  title:String,
  description:String,
  price:Number,
  thumbnail:String,
  videos:[{title:String,url:String}],
  quizzes:[{
    question:String,
    options:[String],
    correctAnswer:Number
  }]
},{timestamps:true});
export default mongoose.model("Course",courseSchema);
