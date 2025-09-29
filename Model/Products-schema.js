var mongoose=require("mongoose")

var ProductScheme=new mongoose.Schema({
    productName:String,
    Metal:String,
    price:Number,
    isActive:Boolean

})
module.exports=mongoose.model("products",ProductScheme)