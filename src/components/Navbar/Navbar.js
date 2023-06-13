import React from 'react'
import "./Navbar.css"
export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png'></img>
      </div>
      <div className='navbar-list'>
        <h3>GENERATOR</h3>
        <h3>IMAGES</h3>
        <h3>SEARCH</h3>
      </div>
    </div>
  )
}