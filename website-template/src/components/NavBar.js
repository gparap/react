import React from 'react'
import Logo from '../assets/images/logo.png'

function NavBar() {
    return (
        <div className='navbar'>
            {/* Brand Icon */}
            <div className='navbar-brand'>
                <img src={Logo} alt='gparap' width={64} height={64} />Brand Icon
            </div>

            {/* Navigation Links */}
            <div className='navbar-links'>
                Navigation Links
            </div>
        </div>
    )
}

export default NavBar