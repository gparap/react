import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer'>
      <h3>Keep in Touch!</h3>
      <div className='footer-container-social'>
        <FaFacebook className='social-icon'/>
        <FaInstagram className='social-icon'/>
        <FaTwitter className='social-icon'/>
        <FaPinterest className='social-icon'/>
      </div>
      <hr />
      <p>Copyright 2024 gparap</p>
    </div>
  )
}

export default Footer