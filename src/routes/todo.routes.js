const express=require('express');
const router=express.router();
const getTodos=require("../controllers/todo.controller")

app.get("/",getTodos)