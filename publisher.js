var mongoose=require("mongoose");
var p_schema=mongoose.Schema({
	name:String
})
var publisher=mongoose.model("publisher",p_schema);
module.exports=publisher;