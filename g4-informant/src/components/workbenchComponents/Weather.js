import React, { useState } from 'react'

export default function Weather(props) {
    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        setIsActive(current => !current)
    }
    /*
    const [weather, setWeather] = useState("");

    fetch(`http://G4Informant.com/weather`, {
        method: 'GET',
        })
        .then(response => {
            return response.json()
        })
        .then(data => { setWeather(data)
    })

    const test = weather.map((y) => y.air_temperature)
    */

    let weatherType = "rain"
    let imgSrc = "rain.png";

    switch(weatherType) {
        case "rain": imgSrc = "rain.png"; break;
        case "cloudy": imgSrc = "cloudy.png"; break;
        default: imgSrc = "fog.png"
    }  
 
    return (
        <div className="weatherBox" onClick={handleClick} style={{height:props.height, width:props.width, border:isActive ? '4px solid red' : ''}}>
            <h3>Norge - Bø</h3>
            <img src={`weathericon/png/${imgSrc}`} alt="" id="weathericon"/>
            <h1>-3°C</h1>
        </div>
    )
}

/*
    -Gjøre API kall inne i denne komponenten?
    -Bilde for vær type?
    -Tempartur Celsius/Fahrenheit
    -Standard bakgrunnsbilde?
    -Flere opplysninger om vær?
    */