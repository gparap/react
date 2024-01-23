/* (c) 2022 gparap */
import React from 'react'
import Logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-body-tertiary">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand">
            <img src={Logo} alt='logo-brand' width={64} height={64} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item nav-item-custom">
                <Link to='/Home' className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item nav-item-custom">
                <Link to='/About' className="nav-link" aria-current="page">About</Link>
              </li>
              <li className="nav-item nav-item-custom">
                <Link to='/Contact' className="nav-link" aria-current="page">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar