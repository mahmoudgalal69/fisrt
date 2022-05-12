import React from 'react'
import "./backDrop.css"

function backDrop({togller,click}) {
  return ( togller && <div className='backdrop' onClick={click}></div>)
}

export default backDrop