/* (c) 2024 gparap */
import React from 'react'
import Testimonial from '../components/Testimonial'
import Image_1 from '../assets/images/testimonial_1.png';
import Image_2 from '../assets/images/testimonial_2.png';
import Image_3 from '../assets/images/testimonial_3.png';

function About() {
  return (
    <div>
      <div className='container'>
        {/* About section */}
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>

        {/* Testimonial section */}
        <div className='container-testimonials'>
          <h1>Testimonials</h1>
          <div className='row'>
            <Testimonial
              image={Image_1}
              testimony='Maiores non aut consequatur voluptas illo eligendi. Fuga est deserunt 
              voluptatum vel assumenda id recusandae. Saepe voluptatem rerum ut.'
              name='George' vocation='Data Analyst'
              backgroundColor='#d3d3d388'
            />
            <Testimonial
              image={Image_2}
              testimony='Odio id qui qui est et temporibus. Debitis minima omnis ea dicta 
              consequatur sed autem sed. A amet fugit debitis sint sapiente quae.'
              name='Emma' vocation='Biologist'
              backgroundColor='#d3d3d344'
            />
            <Testimonial
              image={Image_3}
              testimony='Reprehenderit aut ea repellendus officiis quia nihil. Adipisci et quia sit 
              ratione aut non perspiciatis. Eos sed veniam voluptatibus magni autem.'
              name='Alex' vocation='Software Developer'
              backgroundColor='#d3d3d388'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About