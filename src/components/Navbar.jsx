import React, { useState } from 'react'
import '../Style/Navbar.css'
function Navbar() {
  const [show, setShow] = useState(false)

  const handShow = () => {
    setShow(prev => !prev)
  }
  return (
    <>
      <nav>
        <h1>UP<span>code</span></h1>
        <div className={`center-nav ${show ? 'show-mobile' : ''}`}>
          <a href="">Home</a>
          <a href="">Skills</a>
          <a href="">About Us</a>
          <a href="">Pricing</a>
          <a href="">Contacts</a>
        </div>
        <div className="end-nav-btn">
          <button>Let's Talk</button>
        </div>
        <div className="menu" onClick={handShow}>
          <button>Menu</button>
        </div>
      </nav >

    </>
  )
}

export default Navbar