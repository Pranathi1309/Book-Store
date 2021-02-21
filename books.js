var mongoose=require("mongoose");
var b_schema=mongoose.Schema({
	title:String,
	author:String,
	category:String,
	publisher:String,
	price:String
})
var books=mongoose.model("books",b_schema);
module.exports=books;