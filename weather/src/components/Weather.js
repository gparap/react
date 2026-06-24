/* Copyright (c) 2026 gparap | SPDX-License-Identifier: MIT */

import React, { useEffect, useState } from 'react'
import '../App.css'
import logo from '../logo.png';

const Weather = () => {
    let api_key = "YOUR_API_KEY_HERE"
    let api_url = "YOUR_API_URL_HERE"

    const [weatherApiData, setWeatherApiData] = useState(null);
    const [cityInputData, setCityInputData] = useState("");

    const fetchWeather = async (city) => {
        try {
            const response = await fetch(
                "https://" + api_url + "/city?lang=EN&city=" + encodeURIComponent(city),
                {
                    method: "GET",
                    headers: {
                        "X-RapidAPI-Key": api_key,
                        "X-RapidAPI-Host": api_url,
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    }
                }
            );
            const result = await response.json();
            setWeatherApiData(result);
        } catch (error) {
            console.error("Fetch error:", error);
        }
    };

    const handleCityInputData = (e) => {
        setCityInputData(e.target.value);
    }

    const searchCityWeather = (city) => {
        fetchWeather(city);
    }

    //TODO: convert fahrenheit to celcious using formula: Celsius = (Fahrenheit - 32) / 1.8

    return (
        <div className='container'>
            {/* Search Input */}
            <input className='mt-2' type='text' placeholder='City Name' onChange={handleCityInputData} />
            <button className='btn btn-primary ms-2' type='button' onClick={() => { searchCityWeather(cityInputData) }}><i className='bi bi-search'></i></button>
            {/* Weather Result */}
            <div className=''>Weather</div>
            <div className='card'>
                <img src={logo} className='card-img-top w-25 mx-auto d-block' alt='weather icon' />
                <div className='card-body'>
                    <p className='card-text'>Weather:&nbsp;{weatherApiData?.weather[0]?.main || "Loading ..."}</p>
                    <p className='card-text'>Description:&nbsp;{weatherApiData?.weather[0]?.description || "Loading..."}</p>

                    <div className='d-flex justify-content-center align-items-center'>
                        <i className="bi bi-thermometer-half"></i>&nbsp;
                        <p className='card-text'>Temprature:&nbsp;{weatherApiData?.main?.temp || "Loading..."}&nbsp;&deg;F</p>
                    </div>
                    <p />
                    <div className='d-flex justify-content-center align-items-center'>
                        <i className="bi bi-droplet"></i>&nbsp;
                        <p className='card-text'>Humidity:&nbsp;{weatherApiData?.main?.humidity || "Loading..."}&nbsp;%</p>
                    </div>
                    <p />
                    <div className='d-flex justify-content-center align-items-center'>
                        <i className="bi bi-wind"></i>&nbsp;
                        <p className='card-text'>Wind Speed:&nbsp;{weatherApiData?.wind?.speed || "Loading..."}&nbsp;meters/sec</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather
