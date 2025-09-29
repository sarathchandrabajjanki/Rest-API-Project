
var bookSchema=require("../Model/book-schema")

var GetAllBooks=async (req,res)=>{
    var Allbooks=await bookSchema.find()
    res.status(201).json(Allbooks)
}
var getSingleBook=async(req,res)=>{
    var BookId=req.params.id
    var singelBook=await bookSchema.findById(BookId)
    res.status(201).json(singelBook)
}
var AddBooks=async (req,res)=>{
    var newBook=req.body
    var AddBook=await bookSchema.create(newBook)
    if(AddBook){
        console.log("added the new book",AddBook)
    }
    else{
        console.log(error)
    }
}
var UpdateBook=async (req,res)=>{
    var BookId=req.params.id
    var updateData=req.body
    var UpdateBook=await bookSchema.findByIdAndUpdate(BookId,updateData)
    res.status(201).json(UpdateBook)
}
var DeleteBook=async(req,res)=>{
    var BookId=req.params.id
    var DeleteBook=await bookSchema.findByIdAndDelete(BookId)
    res.status(201).json(DeleteBook)
}
module.exports={GetAllBooks,getSingleBook,AddBooks,UpdateBook,DeleteBook}