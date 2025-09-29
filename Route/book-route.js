var express=require("express")
var Route=express.Router()
var {GetAllBooks,getSingleBook,AddBooks,UpdateBook,DeleteBook}=require("../Controllers/book-controller")



Route.get("/",GetAllBooks)
Route.get("/:id",getSingleBook)
Route.post("/add",AddBooks)
Route.put("/update/:id",UpdateBook)
Route.delete("/delete/:id",DeleteBook)

module.exports=Route