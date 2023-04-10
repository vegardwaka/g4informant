import React, { useState, useEffect } from 'react'

export default function Weather(props) {
    const [weather, setWeather] = useState([])
    

    async function getWeather() {
        await fetch(`http://localhost:3001/Weather/59.40&9.06`, {
        method: 'GET',
        })
        .then(response => {
            return response.json()
        })
        .then(data => { setWeather(data.properties.timeseries)
        
        })
    }
    useEffect(() => {
        getWeather()
    }, [])
    

    let weatherType = "rain"
    let imgSrc = "rain.png";
    let weatherHour = weather[0]

    switch(weatherType) {
        case "rain": imgSrc = "rain.png"; break;
        case "cloudy": imgSrc = "cloudy.png"; break;
        default: imgSrc = "fog.png"
    }  
 
    return (
        <div className="weatherBox" onClick={props.toggle} style={{height:props.height, width:props.width, border:props.show ? '4px solid red' : ''}}>
            <h3>Norge - Bø</h3>
            <img src={`weathericon/png/${imgSrc}`} alt="" id="weathericon"/>
            <h1>{JSON.stringify(weatherHour)}</h1>
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