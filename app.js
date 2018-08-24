var express= require('express');
var app= express();


app.listen(process.env.port,process.env.IP,function(){
    console.log("Yelp camp has started");
});