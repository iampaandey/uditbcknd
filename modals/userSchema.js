import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
name:String,
email:String,
password:String,
plantype:String
})
 const UserModal = mongoose.model("userData",userSchema);
 export default UserModal;