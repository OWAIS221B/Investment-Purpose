import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="navbar">
      <div className="logo">LOGO</div>

      <div
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="#" className="active">
          Home
        </a>
        <a href="#">About Us</a>
        <a href="#">Services</a>
        <a href="#">Calculators</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </div>

      <button className="login-btn">Login</button>
    </nav>
  )
}

export default Navbar
