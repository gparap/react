/* (c) 2024 gparap */
import React from 'react'
import Map from '../assets/images/map.png'

function Contact() {
  return (
    <div>
      {/* Contact header */}
      <h1 className='contact-header'>Contact Us</h1>

      {/* Contact details section */}
      <div>
        <h4>Address</h4>
        <p>123 Main Street, CityVille, around the globe</p>
      </div>
      <div>
        <h4>E-mail</h4>
        <p>info@template.com</p>
      </div>
      <div>
        <h4>Phone</h4>
        <p>+99 (123) 456-7890</p>
      </div>

      {/* Location map */}
      <div class='container contact-map'>
        <img src={Map} class='img img-fluid d-sm-none d-md-block w-100' alt='map' />
      </div>
    </div>
  )
}

export default Contact