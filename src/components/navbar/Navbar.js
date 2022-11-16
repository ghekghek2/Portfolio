import { useRef } from "react"
import {FaBars,FaTimes} from "react-icons/fa"
import React from 'react'
import './navbar.css'
function Navbar() {

const navRef = useRef()

const showNavbar = () =>{
    navRef.current.classList.toggle("responsive-nav")
}

  return (
    <header>
        <h3>logo</h3>
        <nav className="n" ref={navRef}>
            <a href="/#">Home</a>
            <a href="/#">About me</a>
            <a href="/#">Skill</a>
            <a href="/#">Project</a>
            <a href="/#">Contact</a>
          
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
    <FaTimes/>
            </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
    <FaBars/>
            </button>
        
    </header>
  )
}

export default Navbar
