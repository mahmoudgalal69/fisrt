import React from 'react'
import {Link} from "react-router-dom"
import "./navbar.css"


function navbar({click}) {
  return (
    <nav className='navbar' >
      <div className='navbar-logo' >
        <h2 >GALAL SHOP</h2>
      </div>
      <ul className='navbar-links' >
          <li >
            <Link to="/cart" className='cart-logo'><span >
              <i className='fas fa-shopping-cart'></i>
              cart
              <span className='cart-count'>0</span>
              </span>
            </Link>
          </li>
          <li >
              <Link to="/">
              shop
              </Link>
          </li>
      </ul>
      <div className='humberger-menu' onClick={click}>
        <div ></div>
        <div ></div>
        <div ></div>
      </div>
    </nav>
  )
}

export default navbar