// const express = require("express"); commonjs syntax
import express from 'express'
import dotenv from 'dotenv';
dotenv.config();
const app = express()

const PORT = process.env.PORT

app.get("/", function(req, res){
  res.send("Message from backend");
});

app.get("/twitter", function(req, res){
  res.send("hello twitter");
}) 

app.listen(PORT, function(){
  console.log(`Server listening on port:  http://localhost:${PORT}`)
})
