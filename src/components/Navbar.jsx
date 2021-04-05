import React from 'react'
import compass from '../images/compass.png'
import backpack from '../images/backpack.png'
import '../components/Navbar.css'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return(
    <>
    <nav className="navbar">
      <div className="navbar-bottom">
      <div className="navbar-container">
        <ul className="navbar-menu">
          <li
            className="navbar-item"
          >
            <NavLink className="navbar-links" to="/" exact>
              <img src={compass} className="img-item" alt={compass} />
              <p className="navbar-text">Explore</p>
            </NavLink>
          </li>
          <li
            className="navbar-item"
          >
            <NavLink className="navbar-links" to="/my-pokemon-list">
              <img src={backpack} className="img-item" alt={backpack} />
              <p className="navbar-text">Pokemon List</p>
            </NavLink>
          </li>
        </ul>
        
      </div>
      </div>
    </nav>
    </>
  )
}