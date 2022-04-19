//Explain handling request routing in MEAN with programing

/** 
 //Required external modules
 //To start your expres server,require express in index.js
 
const express=require("express");
const path=require("path");

 //app variable
 //file and store an instance into the app variable

const app =express();
//declear a pot variable and specify the address
const port=4000;


 // Routes Definations
 //append .get() to your app variablr,specify an anonymous route, and iclude a callback accesses the request and response argument.
 
app.get("/",(req,res) =>{
//res.send() dispatches data to the browser
    res.send("hello");
})

 // Server Activation
 //.listen() to app and insert port as the first argument then a callback function
 //
app.listen(port,()=>{
    console.log("listening to requests on http://localhost:${port}");
})
*/





//Configure  an Express application with coding
 
//Required external modules
 //To start your expres server,require express in index.js
 
const express = require("express")
const path = require('path')


 // app variable
 //file and store an instance into the app variable
 
const app = express();
//mongoose connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodemongo');
const db = mongoose.connection;
// Check for DB connection
db.once('open', function(){
 console.log("Connected to MongoDB successfully!");
});
db.on('error', function(){
 console.log(err);
});

const posts = require('./routes/posts');
app.use('/posts', posts);


 // Routes Definations
 //append .get() to your app variablr,specify an anonymous route, and iclude a callback accesses the request and response argument.
app.get("/", (req, res) => {
  //res.sendFile() dispatches data to the browser
  res.sendFile(path.join(__dirname, 'views/index.html'))
});

app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'))
});

app.get("/service", (req, res) => {
  res.sendFile(path.join(__dirname, 'views/service.html'))
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, 'views/contact.html'))
});

app.get("/navbar", (req, res) => {
  res.sendFile(path.join(__dirname, 'views/navbar.html'))
});


app.get("/css", (req, res) => {
  res.sendFile(path.join(__dirname, 'views/style.css'))
});


 // Server Activation
 //.listen() to app and insert port as the first argument then a callback function
 
//declear a pot variable and specify the address
app.listen(5000, () => {
  console.log('Listening on port ' + 5000);
});



/**
 * Explian Rendering views with programing 

// Set express as Node.js web application
// server framework.
// To install express before using it as
// an application server by using
// "npm install express" command.
var express = require('express');
var app = express();
 
// Set EJS as templating engine
app.set('view engine', 'ejs');
app.get('/', (req, res)=>{
 
  // The render method takes the name of the html
  // page to be rendered as input.
  // This page should be in views folder
  // in the root directory.
  var data = {name:'Shubham',
      hobbies:['playing football', 'playing chess', 'cycling']}
   
  res.render('home', {data:data});
  });
   
  var server = app.listen(4000, function() {
      console.log('listening to port 4000')
  });
*/



