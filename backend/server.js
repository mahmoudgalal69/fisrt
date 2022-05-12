import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connecteddb from "./config/db.js"
import productsroutes from "./routes/products.js"
connecteddb()

const app = express()

app.use(express.json({extended:true}))
app.use(express.urlencoded({extended:true}))

app.use("/api/products" , productsroutes)


const PORT = process.env.PORT


app.listen(PORT, ()=>console.log(`server is runing on port ${PORT} 👍`))