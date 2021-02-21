var mongoose =require("mongoose");
var a_schema=mongoose.Schema({
	name:String,
	age:String
})
var authors=mongoose.model("authors",a_schema);
module.exports=authors;