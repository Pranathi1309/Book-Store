var express=require("express");
var app=express();
var mongoose=require("mongoose");
var body=require("body-parser");
var authors=require("./authors");
var books=require("./books");
var category=require("./category");
var publisher=require("./publisher");
var user=require("./user");
app.set("view engine","ejs");
mongoose.connect("mongodb://localhost/book",{useNewUrlParser:true});
app.use(body.urlencoded({extended:true}));
//-------------------------------------------------------------------------------------------------------
app.listen(5000,function(req,res){
console.log("Server Started");
});
//----------------------------------------------------------------------------------------------------
app.get("/home",function(req,res){
	res.render("home");
});
//-----------------------------------------------------------------------------------------------------
app.get("/authorDetails",function(req,res){
authors.find({},function(err,me){
res.render("authorDetails",{
	me:me
})
});
});
//-------------------------------------------------------------------------------------------------
app.get("/booksAvailable",function(req,res){
books.find({},function(err,me){
res.render("booksAvailable",{
	me:me
})
});
});
//--------------------------------------------------------------------------------------------------
app.get("/login",function(req,res){
res.render("login");
});
app.post("/login",function(req,res){
uname=req.body.uname;
pass=req.body.password;
user.findOne({username:uname},function(err,me){
if(err){
	console.log("user does not exist")
}
else{
	if(me.password==pass){
		res.render("home");

	}
	else {
		console.log("password incorrect")
	}
}
});
});
//------------------------------------------------
app.get("/signin",function(req,res){
res.render("signin");
});
app.post("/signin",function(req,res){
username=req.body.uname;
password=req.body.password;
mail=req.body.mail;
user.find({},function(err,me){
	user.create(new user({"username":username,"password":password,"mail":mail}),function(err,user){
		if(err){
			console.log("something fishy");
		}
		else{
			console.log("registered successfully");
			res.render("login");
		}

	});

});
});