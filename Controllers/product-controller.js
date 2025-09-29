
var Products=require("../Model/Products-schema")    

var GetAllProducts=async (req,res)=>{

    var AllProducts=await Products.find()
    res.status(200).json(AllProducts)

}

var getSingleProduct=async (req,res)=>{
    var ProductId=req.params.id
    var SingleProduct=await Products.findById(ProductId)
    res.status(200).json(SingleProduct)
}
var UpdateProduct=async (req,res)=>{
    var ProductId=req.params.id
    var updateData=req.body

    var UpdatedProduct= await Products.findByIdAndUpdate(ProductId,updateData)
if(UpdatedProduct){
    res.status(200).json(UpdatedProduct)
}else{
    res.status(404).json({message:"error in updating data"})
}
}

var NewProducts=async (req,res)=>{
    var AddProducts=req.body
    var AddedProducts=await Products.create(AddProducts)
    if(AddedProducts){
        res.status(201).json(AddedProducts)
    }
    else{
        res.status(404).json({message:"unable to add product"})
    }
}
var DeleteProduct=async (req,res)=>{
    var ProductId=req.params.id
    var DeletedProduct=await Products.findByIdAndDelete(ProductId)
    if(DeletedProduct){
        res.status(200).json(DeletedProduct)
    }
    else{
        res.status(404).json({message:"unable to delete"})
    }
}
module.exports={
    GetAllProducts,getSingleProduct,UpdateProduct,NewProducts,DeleteProduct

}