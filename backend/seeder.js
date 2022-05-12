import Product from "./model/product.js";
import connecteddb from "./config/db.js";
import products from "./data/product.js";

connecteddb()

const dataseeder = async()=>{
try{
await Product.deleteMany({})
await Product.insertMany(products)
console.log("dataadded")
process.exit()
}
catch(err){
console.log(err)
process.exit(1)
}
}

dataseeder()