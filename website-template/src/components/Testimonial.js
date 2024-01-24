/* (c) 2024 gparap */
import React from 'react';

const Testimonial = ({ image, testimony, name, vocation, backgroundColor, textColor }) => {
  const cardStyle = {
    backgroundColor: backgroundColor || '#d3d3d300',
  };

  return (
    <div className='col-lg-4'>
      <div className='card m-2 p-2' style={cardStyle}>
        {/* IMAGE inside SVG */}
        <div>
          <svg
            className='bd-placeholder-img rounded-circle'
            width='140'
            height='140'
            xmlns='http://www.w3.org/2000/svg'
            role='img'
            aria-label='Placeholder'
            preserveAspectRatio='xMidYMid slice'
            focusable='false'>
            <title>Placeholder</title>
            <rect width='100%' height='100%' fill='var(--bs-secondary-color)'></rect>
            <clipPath id='circleClip'>
              <circle cx='50%' cy='50%' r='100%' />
            </clipPath>
            <image
              href={image}
              width='100%'
              height='100%'
              clipPath='url(#circleClip)'
            />
          </svg>
        </div>
        {/* TESTIMONY */}
        <p>{testimony}</p>
        {/* NAME */}
        <h3 className='fw-normal'>{name}</h3>
        {/* VOCATION */}
        <p className='fst-italic'>{vocation}</p>
      </div>
    </div>
  );
};

export default Testimonial;
