import React from 'react'
import Product from "../components/product"
import "./home.css"

function home() {
  return (
    <div className='home'>
      <div className='products'>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      </div>
    </div>
  )
}

export default home