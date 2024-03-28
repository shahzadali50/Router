import React from 'react'
import {NavLink } from "react-router-dom";


function Header() {
  
  return (
   <>
    <header className="sticky-top header">
    <div className="container">

      <nav className="navbar navbar-expand-lg navbar-light">
        <NavLink className="navbar-brand" to="/">
          <h3>React.Js</h3>
        </NavLink>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav menu">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="services">Services</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>

    </div>
  </header>
   </>
  )
}

export default Header