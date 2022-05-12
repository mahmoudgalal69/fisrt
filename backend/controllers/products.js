import Product from "../model/product.js"


export const getallproducts = async (req,res)=>{
    try{
    const products =await Product.find({})
    res.send(products)
   }
   catch(err){
       res.send(err)
   }
}

export const getproduct = async (req,res)=>{
    try{
    const products =await Product.findById(req.params)
    res.send(products)
   }
   catch(err){
       res.send(err)
   }
}