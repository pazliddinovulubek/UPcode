import React from 'react'
import '../Style/Navbar.css'
function Navbar() {
  return (
    <>
      <nav>
        <h1>UP<span>code</span></h1>
        <div className="center-nav">
          <a href="">Home</a>
          <a href="">Skills</a>
          <a href="">About Us</a>
          <a href="">Pricing</a>
          <a href="">Contacts</a>
        </div>
        <div className="end-nav-btn">
          <button>Let's Talk</button>
        </div>
        <div className="menu">
          <button>Menu</button>
        </div>
      </nav>

    </>
  )
}

export default Navbar