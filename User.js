
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name:String,
  email:{type:String,unique:true},
  password:String,
  role:{type:String,default:"student"},
  enrolledCourses:[{type:mongoose.Schema.Types.ObjectId,ref:"Course"}]
},{timestamps:true});
export default mongoose.model("User",userSchema);
