var mongoose =require("mongoose");
var a_schema=mongoose.Schema({
	username:String,
	password:String,
	mail:String
})
var user=mongoose.model("user",a_schema);
module.exports=user;