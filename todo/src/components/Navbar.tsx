import React from 'react'
import {NavLink} from "react-router-dom";

import './Navbar.scss';
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__container _container">
        <div className="navbar__body">
          <ul className="navbar__ul">
            <li>
              <NavLink to="/">
                TO-DO
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/info">
                Info
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
