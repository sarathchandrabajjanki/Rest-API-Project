require("dotenv").config()
var express=require("express")
const ConnectToDatabase = require("./DataBase/db")
var BookRoute=require("./Route/book-route")

var app=express()

ConnectToDatabase()//connected data base by calling function

app.use(express.json())//add middleware  to the database

app.use("/api",BookRoute)
var port=process.env.PORT || 9999
app.listen(port,()=>{
    console.log("server is running")
})
