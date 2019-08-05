var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var campgrounds = [
		{name: "Salmon creek",image: "https://pixabay.com/get/55e7d24a485aac14f6da8c7dda793f7f1636dfe2564c704c732b7add9448c05d_340.jpg"},
		{name: "Granite Hill",image: "https://pixabay.com/get/57e6d7454e53ae14f6da8c7dda793f7f1636dfe2564c704c732b7add9448c05d_340.jpg"},
		{name: "Mountain Goat's rest",image: "https://pixabay.com/get/57e1d3404e53a514f6da8c7dda793f7f1636dfe2564c704c732b7add9448c05d_340.jpg"},
		{name: "Salmon creek",image: "https://pixabay.com/get/55e7d24a485aac14f6da8c7dda793f7f1636dfe2564c704c732b7add9448c05d_340.jpg"},
		{name: "Granite Hill",image: "https://pixabay.com/get/57e6d7454e53ae14f6da8c7dda793f7f1636dfe2564c704c732b7add9448c05d_340.jpg"},
		{name: "Mountain Goat's rest",image: "https://pixabay.com/get/57e1d3404e53a514f6da8c7dda793f7f1636dfe2564c704c732b7add9448c05d_340.jpg"},
		{name: "Salmon creek",image: "https://pixabay.com/get/55e7d24a485aac14f6da8c7dda793f7f1636dfe2564c704c732b7add9448c05d_340.jpg"},
		{name: "Granite Hill",image: "https://pixabay.com/get/57e6d7454e53ae14f6da8c7dda793f7f1636dfe2564c704c732b7add9448c05d_340.jpg"},
		{name: "Mountain Goat's rest",image: "https://pixabay.com/get/57e1d3404e53a514f6da8c7dda793f7f1636dfe2564c704c732b7add9448c05d_340.jpg"},
	];

app.use(bodyParser.urlencoded({extended:true})); 
app.set("view engine","ejs");


app.get("/",function(req,res){
	res.render("landing");
});

app.get("/campgrounds",function(req,res){
	res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds",function(req,res){
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image};

	campgrounds.push(newCampground);
	res.redirect("/campgrounds");
});

app.get("/campgrounds/new",function(req,res){
	res.render("new");
});

app.listen(3000,function(){
	console.log("Yelp Camp has started!!");
});
