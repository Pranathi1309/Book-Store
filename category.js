var mongoose=require("mongoose");
var c_schema=mongoose.Schema({
	name:String
})
var category=mongoose.model("category",c_schema);
module.exports=category;