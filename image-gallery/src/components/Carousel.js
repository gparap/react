/* gparap (c) 2024 */
import React, { useState } from 'react'
import Image_01 from '../assets/images/img_01.jpg';
import Image_02 from '../assets/images/img_02.jpg';
import Image_03 from '../assets/images/img_03.jpg';
import Image_04 from '../assets/images/img_04.jpg';
import Image_05 from '../assets/images/img_05.jpg';
import Image_06 from '../assets/images/img_06.jpg';

function Carousel() {
    //array containing all images
    const images = [
        { index: 0, src: Image_01, name:"img_01.jpg" },
        { index: 1, src: Image_02, name:"img_02.jpg" },
        { index: 2, src: Image_03, name:"img_03.jpg" },
        { index: 3, src: Image_04, name:"img_04.jpg" },
        { index: 4, src: Image_05, name:"img_05.jpg" },
        { index: 5, src: Image_06, name:"img_06.jpg" }
    ];

    //current image index state
    const [currentImageIndex, setcurrentImageIndex] = useState(0);

    //returns the previous image's index
    function getPreviousImageIndex() {
        if (currentImageIndex > 0) {
            setcurrentImageIndex(currentImageIndex - 1);
        }
    }

    //returns the next image's index
    function getNextImageIndex() {
        if (currentImageIndex < images.length - 1) {
            setcurrentImageIndex(currentImageIndex + 1);
        }
    }

    //returns the image by its index
    function getImageByIndex(index) {
        return images.find(image => image.index === index);
    }

    return (
        <div className='carousel-container'>
            <div id="carousel" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={getImageByIndex(currentImageIndex).src} className="d-block w-100" alt="..." />
                        <div class="carousel-caption d-block d-md-block">
                            <h5>{currentImageIndex + 1} of {images.length}</h5>
                            <p style={{ fontStyle: 'italic' }}>image: {getImageByIndex(currentImageIndex).name}</p>
                        </div>
                    </div>
                </div>
                <button onClick={getPreviousImageIndex}
                    className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button onClick={getNextImageIndex}
                    className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}

export default Carousel