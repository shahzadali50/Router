import React from 'react'
import {NavLink } from "react-router-dom";


function Header() {
  
  return (
   <>
    <header>
        <ul className=' d-flex justify-content-around '>
            <li><NavLink   to="/">Home</NavLink></li>
            <li><NavLink  to="/about">About</NavLink></li>
            <li><NavLink   to="/contact">Contact</NavLink></li>
            <li><NavLink   to="/search">Search</NavLink></li>
            <li><NavLink   to="/user">User</NavLink></li>
        </ul>
    </header>
   </>
  )
}

export default Header