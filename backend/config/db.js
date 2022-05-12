import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const MONGOSSE_URI=process.env.MONGOOSE_URI
const connecteddb = ()=>{
    mongoose.connect("mongodb+srv://mahmoudgalal:seriallkiller@mahmoudgalal.ifddv.mongodb.net/ecommercepp?retryWrites=true&w=majority", {useNewUrlParser:true ,useUnifiedTopology:true})
    .then(()=>console.log("connected to db⭐"))
    .catch((err)=>{
        console.log(err)
        process.exit(1)
    })}

    export default connecteddb