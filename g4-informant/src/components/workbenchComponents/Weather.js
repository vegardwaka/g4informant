import React, { useState } from 'react'

export default function Weather() {
const [weather, setWeather] = useState("");
fetch(`http://localhost:3001/weather`, {
    method: 'GET',
    })
    .then(response => {
        return response.json()
    })
    .then(data => { setWeather(data)
    })
    const test = weather.map((y) => y.weather)
    /*
    -Gjøre API kall inne i denne komponenten?
    -Bilde for vær type?
    -Tempartur Celsius/Fahrenheit
    -Standard bakgrunnsbilde?
    -Flere opplysninger om vær?
    -baby yoda
    */
    return (
        <div>
        <p>{test}</p>
        </div>
    )
}