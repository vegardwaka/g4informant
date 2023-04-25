import React, { useState, useEffect } from 'react'

export default function Weather(props) {
    const [weather, setWeather] = useState([])
    const [location, setLocation] = useState({})
    const [lon, setLon] = useState()
    const [lat, setLat] = useState()
    const [city, setCity] = useState("" + props.propcity)
    const [state, setState] = useState("" + props.propstate)
    let imgSrc = null
    var weatherHour = null
    const [show, setShow] = useState(props.hide)
    const [display, setDisplay] = useState(props.display)
    let style={
        color: props.fontColor
    }

    useEffect(() => {
        async function getLocation() {
            await fetch(`https://g4informant.azurewebsites.net//Location/${city}&${state}`, {
            method: 'GET'
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch location data')
                } else {
                    return response.json()
                }
            })
            .then(data => { 
                setLat(data[0].lat)
                setLon(data[0].lon)
                setLocation(data[0].display_name)
            })
        }
        getLocation()
    }, [city, state])


    useEffect(() => {
        async function getWeather() {
            await fetch(`https://g4informant.azurewebsites.net//Weather/${lat}&${lon}`, {
            method: 'GET',
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch weather data')
                } else {
                    return response.json()
                }
            })
            .then(data => { 
                setWeather(data)
            })
        }
            if(lat && lon) {
                getWeather()
            }
    }, [lat, lon])       

    if(location) {
    } 
    else {
        
    }

    if (weather) {
        imgSrc = weather?.properties?.timeseries[2]?.data?.next_1_hours?.summary?.symbol_code
    } 
    else {
 
    }
    
    if (weather) {
        weatherHour = weather?.properties?.timeseries[2]?.data?.instant?.details?.air_temperature
    } 
    else {
        
    }

    function changeLocation() {
        const out = prompt("Write city and state/area separated by a space.", "Bø Telemark")
        const outArray = out.split(" ")
        if(outArray.length > 2) {
            alert("Location not found, please write city and state/area separated by a space.")
            return
        }
        if(outArray.length < 2) {
            alert("Location not found, please write city and state/area separated by a space.")
            return
        }
         fetch(`https://g4informant.azurewebsites.net//Location/${outArray[0]}&${outArray[1]}`, {
            method: 'GET'
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch location data')
                } else {  
                    return response.json()
                }
            })
            .then(data => { 
                if(data.length === 0) {
                    alert("Location not found, please write city and state/area separated by a space.")
                    return
                }
                else {
                    setCity(outArray[0])
                    setState(outArray[1])
                    setShow(false)
                    props.setWeatherObj({
                        city: outArray[0],
                        state: outArray[1]
                    })
                } 
            })  
    }

    return (
        <div 
            className={props.fulldisplay ? "weatherBox-fulldisplay" : "weatherBox"}
            onClick={props.toggle} 
            style={{
                height:props.height, 
                width:props.width, 
                border:props.show ? '3px dashed black' : ''
            }}
        >
            {show && <button className="weather-location-button" onClick={changeLocation}>Set location</button>}
            {display && <h1 className="weather-location-city">{JSON.stringify(location).split(',').at(0).replace(/"/g, "")}</h1>}
            {display && <p className="weather-location-state">{JSON.stringify(location).split(',').at(1)}</p>}
            {display ? <img src={`/weathericon/png/${imgSrc}.png`} alt="emptypicture" id="weathericon"/> : <img src="/images/icons/sun.png" alt="sun" width="100px"/>}
            {display && <h1 className="weather-location-degrees">{weatherHour+" °C"}</h1>}
        </div>
    )
}   