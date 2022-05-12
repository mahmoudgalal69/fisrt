import React from 'react'
import "./product.css"
function product() {
  return (
    <div className="productscreen">

          <div className="productscreen__left">
            <div className="left__image">
              <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt=""/>
            </div>
            <div className="left__info">
              <p className="left__name">product</p>
              <p>Price: $99.99</p>
              <p>Description: bbwsvklvbkl wvenw wohwrhkr wuhrwpwjjwe hwe</p>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price:
                <span>$99.99</span>
              </p>
              <p>
                Status:
                <span>
                  stock
                </span>
              </p>
              <p>
                Qty
                <select >
                    <option >0</option>
                    <option >1</option>
                    <option >2</option>
                    <option >3</option>
                    <option >4</option>
                </select>
              </p>
              <p>
                <button type="button" >
                  Add To Cart
                </button>
              </p>
            </div>
          </div>

      
    </div>
  )
}

export default product