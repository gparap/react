/* Copyright (c) 2026 gparap | SPDX-License-Identifier: MIT */

import React from 'react'
import '../App.css'
import logo from '../logo.png';

const Weather = () => {
    return (
        <div className='container'>
            {/* Search Input */}
            <input className='mt-2' type='text' placeholder='City Name' />
            <button className='btn btn-primary ms-2' type='button'><i className='bi bi-search'></i></button>
            {/* Weather Result */}
            <div className=''>Weather</div>
            <div class='card'>
                <img src={logo} className='card-img-top w-25 mx-auto d-block' alt='weather icon' />
                <div class='card-body'>
                    <p className='card-text'>TODO:Weather ie Rain</p>
                    <p className='card-text'>TODO:Description ie light rain</p>

                    <div className='d-flex justify-content-center align-items-center'>
                        <i class="bi bi-thermometer-half"></i>&nbsp;
                        <p className='card-text'>TODO:temprature ie 21.56&deg;C</p>
                    </div>
                    <p />
                    <div className='d-flex justify-content-center align-items-center'>
                        <i class="bi bi-droplet"></i>&nbsp;
                        <p className='card-text'>TODO:humidity ie 91%</p>
                    </div>
                    <p />
                    <div className='d-flex justify-content-center align-items-center'>
                        <i class="bi bi-wind"></i>&nbsp;
                        <p className='card-text'>TODO:wind_speed ie 3.17 meter/sec</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather
