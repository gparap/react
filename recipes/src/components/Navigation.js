// © 2024 gparap
import React from 'react'
import Logo from '../assets/logo.png';

// Navigation component that will behave like a filter
function Navigation() {
    return (
        <nav className="navbar navbar-expand-md bg-body" data-bs-theme="dark">
            <div className="container-fluid">
                <div className="navbar-brand">
                    {/* Logo */}
                    <img style={{ padding: '0.25rem' }}
                        src={Logo} alt="Logo" width="24" height="24" className="d-inline-block align-text-top" />
                    Recipes
                </div>
                <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1">
                    <span className="visually-hidden">Toggle navigation</span>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="navbar-nav">
                        <li className="nav-item"><button className="nav-link active">All</button></li>
                        <li className="nav-item"><button className="nav-link active">Featured</button></li>
                        <li className="nav-item"><button className="nav-link active">Recent</button></li>
                        {/* Recipe Categories List */}
                        <li className="nav-item dropdown">
                            <button className="nav-link dropdown-toggle active" data-bs-toggle="dropdown" aria-expanded="false">Categories
                            </button>
                            <div className="dropdown-menu">
                                <button className="dropdown-item">Meat</button>
                                <button className="dropdown-item">Pasta</button>
                                <button className="dropdown-item">Salad</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation