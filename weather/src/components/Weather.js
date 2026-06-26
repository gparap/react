/* Copyright (c) 2026 gparap | SPDX-License-Identifier: MIT */

import React, { useEffect, useState } from 'react'
import '../App.css'
import logo from '../logo.png';
import cloudy from '../assets/cloudy.png'
import drizzle from '../assets/drizzle.png'
import fog from '../assets/fog.png'
import rain from '../assets/rain.png'
import snow from '../assets/snow.png'
import storm from '../assets/storm.png'
import sun from '../assets/sun.png'

const Weather = () => {
    let api_key = "YOUR_API_KEY_HERE"
    let api_url = "YOUR_API_URL_HERE"

    const [weatherApiData, setWeatherApiData] = useState(null);
    const [cityInputData, setCityInputData] = useState("");
    const [imageData, setImageData] = useState("");

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

    //Runs every time weatherApiData changes to update the image
    useEffect(() => {
        //stop if data missing or weather array is empty
        if (!weatherApiData) return;
        if (!weatherApiData?.weather?.length) return;

        //set image
        const weatherMain = weatherApiData?.weather?.[0]?.main.toLowerCase() || "";
        switch (true) {
            case weatherMain.includes("cloud"):
                setImageData(cloudy);
                break;
            case weatherMain.includes("drizzle"):
                setImageData(drizzle);
                break;
            case weatherMain.includes("rain"):
                setImageData(rain);
                break;
            case weatherMain.includes("snow"):
                setImageData(snow);
                break;
            case weatherMain.includes("storm"):
                setImageData(storm);
                break;
            case weatherMain.includes("clear"):
                setImageData(sun);
                break;
            default:
                setImageData(fog);
        }
    }, [weatherApiData]);

    const convertFahrenheitToCelcius = (fahrenheit) => {
        let celcius = 0;
        if (fahrenheit !== null && fahrenheit !== "undefined") {
            celcius = (fahrenheit - 32) / 1.8;
            celcius = Math.round(celcius);
        }
        return celcius;
    }

    const displayTemperature = () => {
        //get the user's locale to determine if we need °F or °C
        const locale = navigator.language;

        //hadle temperature display
        let temp = weatherApiData?.main?.temp;
        if (locale.includes("US")) {
            return isNaN(temp) ? "Loading..." : temp + "\u00B0F";
        } else {
            return isNaN(temp) ? "Loading..." : convertFahrenheitToCelcius(weatherApiData?.main?.temp) + "\u00B0C";
        }
    };

    return (
        <div className='container' style={{ height: "auto", paddingBottom: "1rem" }}>
            {/* Search Input */}
            <input className='mt-2' type='text' placeholder='City Name' onChange={handleCityInputData} />
            <button className='btn btn-primary ms-2' type='button' onClick={() => { searchCityWeather(cityInputData) }}><i className='bi bi-search'></i></button>
            {/* Weather Result */}
            <div className=''>Weather</div>
            <div className='card'>
                <img src={imageData || logo} className='card-img-top w-25 mx-auto d-block' alt='weather icon' />
                <div className='card-body'>
                    <p className='card-text'>Weather:&nbsp;{weatherApiData?.weather[0]?.main || "Loading ..."}</p>
                    <p className='card-text'>Description:&nbsp;{weatherApiData?.weather[0]?.description || "Loading..."}</p>

                    <div className='d-flex justify-content-center align-items-center'>
                        <i className="bi bi-thermometer-half"></i>&nbsp;
                        <p className='card-text'>Temprature:&nbsp;{ displayTemperature() }</p>
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
