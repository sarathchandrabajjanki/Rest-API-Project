require("dotenv").config()
var express=require("express")
var cors=require("cors")
const ConnectToDatabase = require("./DataBase/db")
var BookRoute=require("./Route/book-route")
var ProductRoute=require("./Route/product-route")

var app=express()

ConnectToDatabase()//connected data base by calling function

app.use(express.json())//add middleware  to the database

app.use("/api",BookRoute)

app.use(cors())
app.use("/products",ProductRoute)

var port=process.env.PORT || 9999
app.listen(port,()=>{
    console.log("server is running")
})
