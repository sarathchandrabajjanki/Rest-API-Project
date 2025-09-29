var express=require("express")
    
var {GetAllProducts,getSingleProduct,UpdateProduct,NewProducts,DeleteProduct}=require("../Controllers/product-controller")

var Route=express.Router()

Route.get("/",GetAllProducts)


Route.get("/:id",getSingleProduct)

Route.post("/add",NewProducts)

Route.put("/update/:id",UpdateProduct)

Route.delete("/delete/:id",DeleteProduct)

module.exports=Route