import React from 'react'
import "./product.css"
import {Link} from "react-router-dom"


function product() {
  return (
    <div className='product'>
        <h2 className='product-name'>product 1</h2>
        <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt='' />
        <div className='product-info'>
          <p >lorem vdppodj ;;ksuusj jjgwsuqwp\ik gjghiwygh owwjhvhwuy owjgoj hgiwyhp</p>
          <p >jvnaswehghafagfvbfgahgafghhfgba hfqypfcbh qgfg g oq'</p>
          <p className="price" >$55.69</p>
          <Link to="/product/554">
          view
          </Link>
        </div>
    </div>
  )
}

export default product