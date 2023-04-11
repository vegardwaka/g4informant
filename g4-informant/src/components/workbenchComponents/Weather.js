import React, { useState, useEffect } from 'react'

export default function Weather(props) {
    const [weather, setWeather] = useState([])
    const [location, setLocation] = useState({})
    const [lon, setLon] = useState()
    const [lat, setLat] = useState()
    //let lon = "9.06"
    //let lat = "59.40"
    let pepe = ""
    let city = "haugesund"
    let state = "rogaland"

    useEffect(() => {
    async function getLocation() {
        await fetch(`http://localhost:3001/Location/${city}&${state}`, {
        method: 'GET'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch location data');
            } else {
                return response.json()}
        })
        .then(data => { 
            setLat(data[0].lat);
            setLon(data[0].lon);
            setLocation(data[0].display_name);
        })
        
    }
        getLocation()
    }, [])

    useEffect(() => {
        async function getWeather() {
            await fetch(`http://localhost:3001/Weather/${lat}&${lon}`, {
            method: 'GET',
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch weather data');
                } else {
                return response.json()}
            })
            .then(data => { setWeather(data)
            
            })
        }
        if(lat && lon) {
            console.log("Weather fetched successfully")
            getWeather()
        }
    }, [lat, lon])
    
    //location?.display_name 
        
                //    useEffect(() => {

        //    lon = JSON.stringify(location[0].lon)
        //    lat = JSON.stringify(location[0].lat) 
        
        console.log(lat)
        console.log(lon)

    //    getWeather()

    //}, []);
        
       
    let imgSrc = null;
    var weatherHour = null;
    //var variabel = location.split(',')
    if(location) {
    } 
    else {
        console.log("there was an error fetching location")}

    if (weather) {
        imgSrc = weather?.properties?.timeseries[2]?.data?.next_1_hours?.summary?.symbol_code;
    } 
    else {console.log("there was an error fetching weather type")}
    
    if (weather) {
        weatherHour = weather?.properties?.timeseries[2]?.data?.instant?.details?.air_temperature;
    } 
    else {console.log("there was an error fetching weather temperature")
    }
    return (
        <div className="weatherBox" onClick={props.toggle} style={{height:props.height, width:props.width, border:props.show ? '4px solid red' : ''}}>
            <h1 className="weather-location-city">{JSON.stringify(location).split(',').at(0).replace(/"/g, "")}</h1>
            <p className="weather-location-state">{JSON.stringify(location).split(',').at(1)}</p>
            <img src={`weathericon/png/${imgSrc}.png`} alt="" id="weathericon"/>
            <h1 className="weather-location-degrees">{weatherHour+" °C"}</h1>
        </div>
    )
}