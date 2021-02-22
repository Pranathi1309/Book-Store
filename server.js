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
//----------------------------------------------------------------------------------------------------
app.get("/searchbygenre",function(req,res){
res.render("searchbygenre");
})
app.post("/searchbygenre",function(req,res){
category=req.body.category;
books.find({"category":category},function(err,me){
	res.render("bookDetails",{
		me:me
	})
})
});
//----------------------------------------------------------------------------------------------------
app.get("/searchbyauthor",function(req,res){
res.render("searchbyauthor");
})
app.post("/searchbyauthor",function(req,res){
author=req.body.author;
books.find({"author":author},function(err,me){
	res.render("bookDetails",{
		me:me
	})
})
});
//----------------------------------------------------------------------------------------------------
app.get("/searchbyname",function(req,res){
res.render("searchbyname");
})
app.post("/searchbyname",function(req,res){
title=req.body.title;
books.find({"title":title},function(err,me){
	res.render("bookDetails",{
		me:me
	})
})
});
//----------------------------------------------------------------------------------------------------
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
		else{
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