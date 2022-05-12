import express from "express"
import {getallproducts , getproduct } from "../controllers/products.js"
const router = express.Router()

router.get("/" , getallproducts)
router.get("/:id" , getproduct)

export default router