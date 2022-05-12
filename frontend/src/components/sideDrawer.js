import React from 'react'
import "./sideDrawer.css"
import {Link} from "react-router-dom"

function sideDrawer({togller,click}) {
    const sideDrawerClass=["sideDrawer"]
    if(togller){
        sideDrawerClass.push("show")
    }
  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className='sideDrawer-links' onClick={click}>
        <li >
          <Link to="/cart">
          <i className='fas fa-shopping-cart'></i>
          <span>cart<span  className='sideDrawer-count'>0</span></span>
          </Link>
        </li>
        <li>
          <Link  to="/">
             SHOP
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default sideDrawer