import mongoose  from "mongoose";
const userSchema = new mongoose.Schema({
    website:{
         type:String,
         require:true
    },
    username:{
         type:String,
         require:true
    },
    password:{
         type:String,
         require:true
    },
})
const user = mongoose.model('users', userSchema);
export default user;