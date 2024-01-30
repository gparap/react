/* gparap (c) 2024 */
import React from 'react'
import Image_01 from '../assets/images/img_01.jpg';
import Image_02 from '../assets/images/img_02.jpg';
import Image_03 from '../assets/images/img_03.jpg';

function Carousel() {
    return (
        <div className='carousel-container'>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Image_01} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Image_02} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Image_03} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}

export default Carousel